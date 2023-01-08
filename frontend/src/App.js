import React from "react";
import axios from "axios";
import { FidgetSpinner } from  'react-loader-spinner'
import ListItem from "./components/ListItem"
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination'
import './App.css'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
            nextPage: -1,
            page: 1,
            totalPages: 0,
            searchInput: ''
        };
    }
    componentDidMount() {
      axios({
        url:'http://localhost:8080/videos',
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        }
      })
      .then(res => {
          var data = res.data;
          this.setState({
            items: data.results,
            isLoading: false,
            nextPage: data.nextPage,
            totalPages: data.totalDocs
          })
      })
      .catch(err =>{
          console.log(err);
      })
    }
    render() {
    const { isLoading, items, totalPages, page, searchInput} = this.state;
    if (isLoading) 
      return (
      <div class="loader">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['#ff0000', '#00ff00', '#0000ff']}
          backgroundColor="#F4442E"
        />
      </div>);
    return (
      <div class="main">
        <div class='header'>
          <img src={require('./resources/famtube.png')} alt="logo" class="logo"/>
        </div>
        <div class="searchbar">
          <TextField value={searchInput} id="outlined-basic" label="Search" variant="outlined" className="textfield" onChange={(event) => this.handleTextField(event)}/>
          <div class="button">
            <Button variant="contained" onClick={(event) => this.searchVideos(event)} style={{minWidth: '5.5vh', minHeight: '5.5vh'}}>
                <SearchOutlinedIcon />
            </Button>
          </div>
        </div>
        <div class="container">
          {items.length > 0 ? <Box display="flex" flexDirection={"column"}>
          {
              items.map((item) => {
                  return <ListItem key={item.id} {...item} />
              })
          }
          <div class="pagination">
            <Pagination count={totalPages} onChange={(event, pageNumber) => this.getVideos(event, pageNumber)} page={page}/>
          </div>
          </Box> : <h1>No videos found</h1>} 
        </div>
      </div>
    );
  }

  getVideos = (event, value) => {
    this.setState({
      isLoading: true,
      page: value
    })
    axios({
      url:'http://localhost:8080/videos?page=' + value,
      method:"GET",
      headers:{
          "Content-Type": "application/json"
      }
    })
    .then(res => {
        var data = res.data;
        this.setState({
          items: data.results,
          isLoading: false,
          nextPage: data.nextPage,
          totalPages: data.totalDocs
        })
    })
    .catch(err =>{
        console.log(err);
    })
  }

  handleTextField = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  searchVideos = (event) => {
    console.log(this.state.searchInput)
    this.setState({
      isLoading: true,
    })
    axios({
      url:'http://localhost:8080/search?search_query=' + this.state.searchInput,
      method:"GET",
      headers:{
          "Content-Type": "application/json"
      }
    })
    .then(res => {
      console.log(res.data)
        var data = res.data;
        this.setState({
          items: data,
          isLoading: false,
          totalPages: 1
        })
    })
    .catch(err =>{
        console.log(err);
    })
  }
}

export default App;

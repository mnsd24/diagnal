import React, { useEffect, useState } from 'react'
import Card from '../card'
import Header from "../header"
import { connect } from 'react-redux'
import { getData1 } from '../../load/page1';
import { getData2 } from '../../load/page2';
import { getData3 } from '../../load/page3';
import './index.css'


const Home = (props) => {

  var [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    props.getData1()
    window.addEventListener('scroll', infiniteScroll);
  })

  function infiniteScroll(e) {
    if (document.documentElement.offsetHeight === window.innerHeight + document.documentElement.scrollTop) {
      if (props.page2.page === undefined) {
        props.getData2()
      }
      if (props.page2.page !== undefined && props.page3.page === undefined) {
        props.getData3()
      }
    }
  }

  function onSearchValue(value) {
    setSearchValue(value)
  }

  return (
    <React.Fragment>
      <div id = "mainDiv" className="lg:hidden md:hidden">
        <Header onSearchValue={onSearchValue} />
        <div className=" px-2">
          {props.page1 && props.page1.page ?
            <div className=""><Card details={props.page1} searchValue={searchValue} /></div>
            : null}
          {props.page2 && props.page2.page ?
            <div className=""><Card details={props.page2} searchValue={searchValue} /></div>
            : null}
          {props.page3 && props.page3.page ?
            <div className=""><Card details={props.page3} searchValue={searchValue} /></div>
            : null}
        </div>
      </div>
      <div className="hiddenBlock w-full text-center py-8 my-12">
        <p className="text-white">Data Avaiable Only for Mobile Resolution</p>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => (
  {
    page1: state.page1,
    page2: state.page2,
    page3: state.page3
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    getData1: () => dispatch(getData1),
    getData2: () => dispatch(getData2),
    getData3: () => dispatch(getData3)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

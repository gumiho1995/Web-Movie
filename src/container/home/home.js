import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as MovieAction from "./action";
import Pagination from "rc-pagination";
import "../../styles/homepage.scss";
import "../../styles/pagination.scss";
import "rc-pagination/assets/index.css";
import { Link } from "react-router-dom";
import wifi from "../../images/wifi.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const nullw500 = require("../../images/nullw500.png");

export default function Home(props) {
  const homeReducer = useSelector((state) => state.homeReducer);
  const [listMovie, setListMovie] = useState([]);
  const [totalSize, setTotalSize] = useState();
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState(0);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  console.log(props);
  const changePage = (e) => {
    setPage(e);
    window.scrollTo(0, 0);
    setListMovie([]);
  };

  useEffect(() => {
    if (listMovie.length === 0 && props.isOnline) {
      dispatch(MovieAction.searchMovie(tab, keyword, page)).then((res) => {
        setListMovie(res.results);
        setTotalSize(res.total_results);
      });
    }
  }, [dispatch, keyword, listMovie.length, page, props.isOnline, tab]);

  return (
    <>
      <div className="slide-container">
        <Fade>
          {listMovie.map((slideImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img
                  src={
                    slideImage.poster_path
                      ? `https://image.tmdb.org/t/p/w500${slideImage.poster_path}`
                      : `${nullw500}`
                  }
                  alt={`Movie Poster`}
                  height={450}
                  width={2000}
                />
              </div>
              <h2>{slideImage.original_title}</h2>
            </div>
          ))}
        </Fade>
      </div>
      <Tabs
        defaultIndex={tab}
        onSelect={(index) => {
          setTab(index);
          setListMovie([]);
        }}
      >
        <TabList>
          <Tab>Now Playing</Tab>
          <Tab>Top Rated</Tab>
        </TabList>

        <TabPanel>
          {props.isOnline ? (
            <>
              <div className="relative">
                <div className="search-input">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                      setListMovie([]);
                    }}
                  />
                </div>

                <section>
                  {!homeReducer.lstMovie.isFetching ? (
                    <div className="movies-grid">
                      {listMovie.map(
                        ({
                          id,
                          poster_path,
                          original_title,
                          release_date,
                          vote_average,
                        }) => (
                          <div className="movie-item infos-container" key={id}>
                            <Link to={`/movie/${id}`} key={id}>
                              <img
                                src={
                                  poster_path
                                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                    : `${nullw500}`
                                }
                                alt={`Movie Poster`}
                              />
                              <div className="infos-box">
                                <div className="infos-one">{release_date}</div>
                                <div className="infos-two">
                                  {original_title}
                                </div>
                                <div className="infos-three">
                                  {vote_average}
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="spinner-container">
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                  <div className="paginator">
                    <Pagination
                      total={totalSize}
                      pageSize={20}
                      onChange={(e) => changePage(e)}
                      current={page}
                    />
                  </div>
                </section>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", paddingTop: 10 }}>
              <img src={wifi}></img>
              <h1 style={{ marginBottom: 5 }}>No Connection</h1>
              <h4 style={{ margin: 0 }}>
                Please check your internet connection
              </h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {props.isOnline ? (
            <>
              <div className="relative">
                <div className="search-input">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                      setListMovie([]);
                    }}
                  />
                </div>

                <section>
                  {!homeReducer.lstMovie.isFetching ? (
                    <div className="movies-grid">
                      {listMovie.map(
                        ({
                          id,
                          poster_path,
                          original_title,
                          release_date,
                          vote_average,
                        }) => (
                          <div className="movie-item infos-container" key={id}>
                            <Link to={`/movie/${id}`} key={id}>
                              <img
                                src={
                                  poster_path
                                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                    : `${nullw500}`
                                }
                                alt={`Movie Poster`}
                              />
                              <div className="infos-box">
                                <div className="infos-one">{release_date}</div>
                                <div className="infos-two">
                                  {original_title}
                                </div>
                                <div className="infos-three">
                                  {vote_average}
                                </div>
                              </div>
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="spinner-container">
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                  <div className="paginator">
                    <Pagination
                      total={totalSize}
                      pageSize={20}
                      onChange={(e) => changePage(e)}
                      current={page}
                    />
                  </div>
                </section>
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", paddingTop: 10 }}>
              <img src={wifi}></img>
              <h1 style={{ marginBottom: 5 }}>No Connection</h1>
              <h4 style={{ margin: 0 }}>
                Please check your internet connection
              </h4>
            </div>
          )}
        </TabPanel>
      </Tabs>
    </>
  );
}

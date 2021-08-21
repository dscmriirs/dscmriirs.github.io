import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'

const Workshops = () => {

  const {
    workshopsYaml: { past, upcoming },
  } = useStaticQuery(graphql`
    {
      workshopsYaml {
        past {
          title
          description
          date
          alt
          event
          location
          videolink
          posterlink
        }
        upcoming {
          title
          description
          date
          alt
          event
          location
          videolink
          posterlink
        }
      }
    }
  `)
  
  const [ispast, setispast] = useState(true);

  return (
    <section
      id="workshops"
      className="section-spacer workshops-section bg-very__gray"
    >
      <div className="container">
        <header className="section-header text-center">
          <h2 className="section-title">Events & Workshops</h2>
          <p className="section-subtitle">
            Come learn, share and connect with us in person.
          </p>
        </header>
        <div className="workshops-type-switch">
          <ul className="nav nav-pills justify-content-center js-tabs">
            <li className="nav-item">  {/* eslint-disable-next-line */}
              <div onClick={() => setispast(false)} style={{ cursor: 'pointer' }} className={`nav-link ${!ispast ? 'active' : ''}`} >
                Upcoming Events
              </div>
            </li>
            <li className="nav-item">  {/* eslint-disable-next-line */}
              <div onClick={() => setispast(true)} style={{ cursor: 'pointer' }} className={`nav-link ${ispast ? 'active' : ''}`} >
                Past Events
              </div>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          {!ispast && <div
            className="tab-pane active"
            id="upcoming"
            role="tabpanel"
            aria-labelledby="upcoming"
          >
             {
              upcoming.map((data) => {
                return (
                  <div style={{marginTop:"4rem"}} className="container">
                    <div className="row flex-column-reverse flex-sm-row align-items-cengit ter">
                      <div className="col-sm-5 mr-auto">
                        <div className="feature-list-wrapper">
                          <div className="content-header">
                            <h2 className="content-title">{data.title}</h2>
                            <hr />
                            <h6> DATE : {data.date} </h6>
                            <h6>WHERE : {data.location}.</h6>
                            <p> {data.description} </p>
                            {data.event === ""?"":<a href={data.event} target="_blank" rel="noopener noreferrer">Event Page</a>}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-list-image">
                          {
                            data.videolink === ""? <img src={data.posterlink} alt={data.alt} width="500" height="474"/>:
                            <iframe
                              width="500"
                              height="274"
                              src={data.videolink}
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              title="1"
                            />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          }
          {ispast && <div
            className="tab-pane active"
            id="past"
            role="tabpanel"
            aria-labelledby="past"
          >
            {
              past.map((data) => {
                return (
                  <div style={{marginTop:"4rem"}} className="container">
                    <div className="row flex-column-reverse flex-sm-row align-items-cengit ter">
                      <div className="col-sm-5 mr-auto">
                        <div className="feature-list-wrapper">
                          <div className="content-header">
                            <h2 className="content-title">{data.title}</h2>
                            <hr />
                            <h6> DATE : {data.date} </h6>
                            <h6>WHERE : {data.location}.</h6>
                            <p> {data.description} </p>
                            {data.event === ""?"":<a href={data.event} target="_blank" rel="noopener noreferrer">Event Page</a>}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-list-image">
                          {
                            data.videolink === ""? <img src={data.posterlink} alt={data.alt} width="500" height="474"/>:
                            <iframe
                              width="500"
                              height="274"
                              src={data.videolink}
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              title="1"
                            />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          }
        </div>
      </div>
    </section>
  )
}

export default Workshops

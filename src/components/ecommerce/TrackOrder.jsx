import React, { useEffect, useState } from "react";
import "./trackOrder.css"
import TrackVeh from "../../assets/track-veh.svg"
import TrackFrom from "../../assets/from-address.svg"
import TrackTo from "../../assets/to-address.svg"
import TrackMap from "../../assets/track-map.png"

const TrackOrder = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
        <div className="track-container">
            <div className="track-head">
                <p className="track-head-text">Ongoing Delivery</p>
            </div>
            { viewportWidth < 1024 &&
                <><div className="track-card">
                <div className="track-order-det">
                    <p className="track-ship-head">Shipment Number</p>
                    <p className="track-ship-num">FP-1238</p>
                    <div className="track-ship-container">
                        <div className="track-ship-dt">
                            <p className="track-date">19-11-2024</p>
                            <p className="track-time">2:45 PM</p>
                        </div>
                        <div className="track-ship-stat">
                            <p className="track-status">On the way to deliver</p>
                            <img src={TrackVeh} alt="Track Ongoing Order" />
                        </div>
                    </div>
                </div>
                <div className="track-order-path">
                    {/* <div className="track-path-point">
                        <img src={TrackFrom} alt="Shipment Tracking From Address Point" />
                        <div className="track-path-add">
                            <p className="track-add-head">Medchal Textile</p>
                            <p className="track-add-main">17th Street, Main Bustand Backside, Macha Bollarum Medchal Malkajigiri, 501301</p>
                            <p className="track-add-num">Naharaju: 9876543210</p>
                            <p className="track-pack">Package: T-shirt</p>
                        </div>
                    </div>
                    <div className="track-path-point">
                        <img src={TrackTo} alt="Shipment Tracking To Address Point" />
                        <div className="track-path-add">
                            <p className="track-add-head">DVNR Township</p>
                            <p className="track-add-main">C-102, DVNR Township, Aliyabad, Medchal Malkajigiri, 501301</p>
                            <p className="track-add-num">Nagaraju: 9876543210</p>
                        </div>
                    </div> */}
                    <div className="track-path">
                        <div className="track-path-point">
                            <img src={TrackFrom} alt="..." />
                            <div className="track-path-add">
                                <p className="track-add-head">Medchal Textile</p>
                                <p className="track-add-main">17th Street, Main Bustand Backside, Macha Bollarum Medchal Malkajigiri, 501301</p>
                                <p className="track-add-num">Naharaju: 9876543210</p>
                                <p className="track-pack">Package: T-shirt</p>
                            </div>
                        </div>
                        <div className="track-path-point">
                            <img src={TrackTo} alt="..." />
                            <div className="track-path-add">
                                <p className="track-add-head">DVNR Township</p>
                                <p className="track-add-main">C-102, DVNR Township, Aliyabad, Medchal Malkajigiri, 50131</p>
                                <p className="track-add-num">Nagaraju: 9876543210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="track-map">
                <img src={TrackMap} alt="Track Order Map" />
            </div></>}
            {viewportWidth > 1023 && 
                <>
                        <div className="track-card">
                            <div className="track-desk-det">
                                <div className="track-order-det">
                                    <p className="track-ship-head">Shipment Number</p>
                                    <p className="track-ship-num">FP-1238</p>
                                    <div className="track-ship-container">
                                        <div className="track-ship-dt">
                                            <p className="track-date">19-11-2024</p>
                                            <p className="track-time">2:45 PM</p>
                                        </div>
                                        <div className="track-ship-stat">
                                            <p className="track-status">On the way to deliver</p>
                                            <img src={TrackVeh} alt="Track Ongoing Order" />
                                        </div>
                                    </div>
                                </div>
                                <div className="track-order-path">
                                {/* <div className="track-path-point">
                                        <img src={TrackFrom} alt="Shipment Tracking From Address Point" />
                                        <div className="track-path-add">
                                            <p className="track-add-head">Medchal Textile</p>
                                            <p className="track-add-main">17th Street, Main Bustand Backside, Macha Bollarum Medchal Malkajigiri, 501301</p>
                                            <p className="track-add-num">Naharaju: 9876543210</p>
                                            <p className="track-pack">Package: T-shirt</p>
                                        </div>
                                    </div>
                                    <div className="track-path-point">
                                        <img src={TrackTo} alt="Shipment Tracking To Address Point" />
                                        <div className="track-path-add">
                                            <p className="track-add-head">DVNR Township</p>
                                            <p className="track-add-main">C-102, DVNR Township, Aliyabad, Medchal Malkajigiri, 501301</p>
                                            <p className="track-add-num">Nagaraju: 9876543210</p>
                                        </div>
                                    </div> */}
                                    <div className="track-path">
                                        <div className="track-path-point">
                                            <img src={TrackFrom} alt="..." />
                                            <div className="track-path-add">
                                                <p className="track-add-head">Medchal Textile</p>
                                                <p className="track-add-main">17th Street, Main Bustand Backside, Macha Bollarum Medchal Malkajigiri, 501301</p>
                                                <p className="track-add-num">Naharaju: 9876543210</p>
                                                <p className="track-pack">Package: T-shirt</p>
                                            </div>
                                        </div>
                                        <div className="track-path-point">
                                            <img src={TrackTo} alt="..." />
                                            <div className="track-path-add">
                                                <p className="track-add-head">DVNR Township</p>
                                                <p className="track-add-main">C-102, DVNR Township, Aliyabad, Medchal Malkajigiri, 50131</p>
                                                <p className="track-add-num">Nagaraju: 9876543210</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="track-map">
                                <img src={TrackMap} alt="Track Order Map" />
                            </div>
                        </div>
            </>
            }
        </div>
    </>
  );
};

export default TrackOrder;

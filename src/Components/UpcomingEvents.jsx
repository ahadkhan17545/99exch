import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Helper from "../helper";
import { getAllEvents } from "../redux/slice/event/eventSlice";
import { Link, useLocation } from "react-router-dom";

function UpcomingEvents({ sportType, eventType, blinkedEvents }) {
  const dispatch = useDispatch();
  const userInfo = Helper();
  const location = useLocation();
  // console.log('location : ', location)

  const userInfos = useSelector((state) => state.events);
  // console.log("upcoming events userinfos : ", userInfos);

  const [allEvents, setAllEvents] = useState([]);
  const [isEventLoading, setIsEventLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const effectiveEventType =
    eventType === undefined || eventType === null ? 4 : eventType;

  useEffect(() => {
    dispatch(
      getAllEvents({
        user_id: userInfo ? userInfo._id : "",
      })
    );
  }, []);

  useEffect(() => {
    if (
      userInfos &&
      Array.isArray(userInfos.events) &&
      userInfos.events.length > 0
    ) {
      // Flatten all competitions' events into one array
      const allNewEvents = userInfos.events
        .flatMap((ev) => ev.competitions || [])
        .flatMap((comp) => comp.events || []);
      setIsEventLoading(false);
      setAllEvents(allNewEvents);

      // Filter 2 events for each event_type: 1, 2, 4
      const filteredEvents = [4, 1, 2]
        .flatMap((type) => allNewEvents?.filter(e => e.event_type == type).slice(0, 2));

      blinkedEvents(filteredEvents);

    }
  }, [userInfos]);

  useEffect(() => {
    console.log("usereffect trigger : ", eventType);
    if (allEvents?.length > 0) {
      let filterEvents = allEvents?.filter(
        (item) => item.event_type == eventType
      );
      setEvents(filterEvents);
      // console.log('Filter Events : ', filterEvents)
    }
  }, [allEvents, eventType, sportType]);

  return (
    <>
      {events?.length > 0 && (
        <div className=" px-[1px]">
          <div className="flex justify-between items-center text-xs pb-[2px]">
            <div className="flex gap-[2px] justify-between items-center text-xs pt-[1px] px-1">
              <span className="flex justify-center items-center py-1 px-2 border border-[#000] rounded-xl">
                - LIVE
              </span>
              <span className="flex justify-center items-center py-1 px-2 border border-[#000] rounded-xl">
                {" "}
                - VIRTUAL
              </span>
              <span className="flex justify-center items-center py-1 px-2 border border-[#000] rounded-xl">
                {" "}
                - PREMIUM
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="font-bold">View by:</span>
              <select name="" id="" className="bg-[#000] text-[13px] text-[#fff] ml-1 p-1">
                <option value="TIME">TIME</option>
                <option value="COMPITITION">COMPITITION</option>
              </select>
            </div>
          </div>
          {/* Events */}
          <div className={`${sportType != 'sports' ? "max-h-[16rem] lg:max-h-full" : "h-auto"} overflow-scroll scroll-hide`}>
            <ul>
              {events?.length > 0 &&
                events?.map((item, index) => (
                  <li className="mt-1 pb-1 bg-[#f1f5f8] border-b border-[#d6d7d8]" key={index}>
                    <div className=" px-1 pb-1">
                      <div className="flex justify-between items-center">
                        <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`}>
                          <span className="text-[13px] whitespace-nowrap text-ellipsis overflow-hidden font-semibold tracking-[0.04rem]">
                            {item.event_name}
                          </span>
                        </Link>
                        <div className="flex justify-center items-center gap-1">
                          {item.is_inplay == "True" && (
                            <span className="in__play flex p-1 rounded-lg h-3 w-3 mr-2"></span>
                          )}
                          {item.is_tv && item.is_tv == "True" &&
                            <span className="mr-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                style={{ transform: "scale(1.1)" }}
                                fill="black"
                                className="bi bi-tv"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                              </svg>
                            </span>
                          }
                          {item.is_bm && item.is_bm == "True" &&
                            <span className="mr-2 text-xs font-semibold">
                              BM
                            </span>}
                          {item.is_fancy && item.is_fancy == "True" &&
                            <span className="mr-2 text-xs font-semibold">
                              F
                            </span>}
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-[12px] text-[#ff0000]">
                        <span className="">{item.open_date}</span>
                      </div>
                      <div className="flex justify-around items-center text-sm font-bold leading-[0.8rem] mt-[0.5rem]">
                        <span>1</span>
                        <span>x</span>
                        <span>2</span>
                      </div>
                    </div>
                    <th className="flex justify-between item-center text-center text-[13px] font-bold">
                      <td className="bg-[#72bbef] p-1 w-[100%]">
                        3.9
                      </td>
                      <td className="bg-[#faa9ba] p-1 w-[100%]">
                        3.95
                      </td>
                      <td className="bg-[#72bbef] p-1 w-[100%]">
                        3.55
                      </td>
                      <td className="bg-[#faa9ba] p-1 w-[100%]">
                        3.6
                      </td>
                      <td className="bg-[#72bbef] p-1 w-[100%]">
                        2.16
                      </td>
                      <td className="bg-[#faa9ba] p-1 w-[100%]">
                        2.18
                      </td>
                    </th>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default UpcomingEvents;

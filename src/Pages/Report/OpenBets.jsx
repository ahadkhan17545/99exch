import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { getAllBets } from "../../redux/slice/openBet/openBetSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Helper from "../../helper";
import { useLocation } from "react-router-dom";
import { Table } from "antd";

function OpenBets() {
  const location = useLocation();
  const dispatch = useDispatch();
  const userInfo = Helper();
  const openbets = useSelector((state) => state.bets);
  const [fancyBets, setFancyBets] = useState([]);
  const [matchBets, setMatchBets] = useState([]);

  const getOpenBetsByEvent = async () => {
    dispatch(
      getAllBets({
        user_id: userInfo?._id,
      })
    );
  };

  useEffect(() => {
    getOpenBetsByEvent();
  }, []);

  useEffect(() => {
    if (openbets?.bets?.length > 0) {
      let openBetsData = [];
      if (location?.state?.eventId) {
        openBetsData = openbets?.bets?.filter(
          (item) => item.match_id == location?.state?.eventId
        );
      } else {
        openBetsData = openbets?.bets;
      }
      let fancyOpenBets = openBetsData?.filter(
        (fancy) => fancy.betting_type == "Fancy"
      );
      let matchOpenBets = openBetsData?.filter(
        (match) => match.betting_type == "Match"
      );
      setFancyBets(fancyOpenBets);
      setMatchBets(matchOpenBets);
    }
  }, [openbets, location]);

  const columns = [
    {
      title: "Event Name",
      dataIndex: "event_name",
      sorter: true,
      render: (_, record) => <span>{record?.event_name}</span>,
    },
    {
      title: "Market Type",
      dataIndex: "market_name",
      sorter: true,
      render: (_, record) => <span>{record?.market_name}</span>,
    },
    {
      title: "Selection",
      dataIndex: "runner_name",
      sorter: true,
      render: (_, record) => <span>{record?.runner_name}</span>,
    },
    {
      title: "Bet Type",
      dataIndex: "is_back",
      sorter: true,
      render: (_, record) => <span>{record?.is_back ? "Back" : "Lay"}</span>,
    },
    {
      title: "Stack",
      dataIndex: "stake",
      sorter: true,
      render: (_, record) => <span>{record?.stake}</span>,
    },
    {
      title: "Round ID",
      dataIndex: "betting_id",
      sorter: true,
      render: (_, record) => <span>{record?._id}</span>,
    },
    {
      title: "Place Time",
      dataIndex: "createdAt",
      sorter: true,
      render: (_, record) => (
        <span>
          {new Date(record?.createdAt).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}
        </span>
      ),
    },
  ];

  const columnFancy = [...columns]; // same structure

  return (
    <div className="p-3">
      <p className="rounded bg-[#343435] p-1 shadow text-white text-[15px] font-bold uppercase">
        <span className="px-2">Open Bets</span>
      </p>

      <p className="bg-white my-[7px] mb-[4px] p-1 text-black text-[12px] font-normal">
        <span>Match Odds</span>
      </p>

      <div className="overflow-x-auto whitespace-nowrap bg-white">
        <Table
          columns={columns}
          dataSource={matchBets}
          pagination={true}
          bordered={true}
        />
      </div>

      <p className="bg-white my-[7px] mb-[4px] p-1 text-black text-[12px] font-normal">
        <span>Session</span>
      </p>

      <div className="overflow-x-auto whitespace-nowrap bg-white">
        <Table
          columns={columnFancy}
          dataSource={fancyBets}
          pagination={true}
          bordered={true}
        />
      </div>
    </div>
  );
}

export default OpenBets;

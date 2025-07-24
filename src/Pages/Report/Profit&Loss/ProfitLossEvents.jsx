import { useState, useEffect } from "react";
import { Table } from "antd";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Appconfig from "../../../config/config";
import Helper from "../../../helper";

function ProfitLossEvents() {
  const navigate = useNavigate();
  const params = useParams();

  const userInfo = Helper();
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState({
    user_id: userInfo && userInfo?._id,
    event_type: params && params?.event_type_id,
    from_date: params && params?.from_date,
    to_date: params && params?.to_date,
  });

  useEffect(() => {
    filterProfitLossByEvents();
  }, [params]);

  const filterProfitLossByEvents = async (e) => {
    var data = JSON.stringify(formData);

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}reports/auraProfitLossByEvents`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        try {
          setFilteredData(response.data.resultData);
          // setData(response.data.resultData);
        } catch (e) {
          // postErrorToslack(e.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Sport Name",
      sorter: true,

      render: (_, record) =>
        record.event_type == 4 ? (
          <div className=" ">Cricket</div>
        ) : record.event_type == 2 ? (
          <div className=" ">Tennis</div>
        ) : record.event_type == 1 ? (
          <div className=" ">Soccer</div>
        ) : record.event_type == 777 ? (
          <div className=" ">WCO Casino</div>
        ) : record.event_type == 7 ? (
          <div className=" ">Horse Racing</div>
        ) : record.event_type == 1004 ||
          record.event_type == 1005 ||
          record.event_type == 1007 ||
          record.event_type == 1008 ||
          record.event_type == 1009 ? (
          <div className=" ">Casino</div>
        ) : record.event_type == 4339 ? (
          <div className=" ">Greyhound Racing</div>
        ) : record.event_type == 27979456 ? (
          <div className=" ">Kabaddi</div>
        ) : record.event_type == 7522 ? (
          <div className=" ">Basketball</div>
        ) : record.event_type == 2378961 ? (
          <div className=" ">Politics</div>
        ) : record.event_type == 66101 ? (
          <div className=" ">Virtual</div>
        ) : record.event_type == 66104 ? (
          <div className=" ">Lottery</div>
        ) : (
          <div className=" ">Casino</div>
        ),
    },
    {
      title: "Event Name",
      sorter: true,

      render: (_, record) =>
        record.event_type == "777" ? (
          <Link
            className="text-blue-700"
            to={`/wco-casino-profit-loss-bet-history/${record?.event_type}/${record?.market_id}/${params?.from_date}/${params?.to_date}`}
          >
            {record.remarks.split("(")[0].trim()}
          </Link>
        ) : (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event-market/${record?.match_id}/${params?.from_date}/${params?.to_date}`}
          >
            {record.event_name}
          </Link>
        ),
    },
    {
      title: "Profit/Loss",
      dataIndex: "name",
      sorter: true,
      render: (_, record) => (
        <span style={{ color: record.totalPL < 0 ? "red" : "green" }}>
          {Math.abs(record?.totalPL)?.toFixed(2)}
        </span>
      ),
    },
    {
      title: "Total P&L",
      dataIndex: "name",
      sorter: false,
      render: (_, record) => (
        <span style={{ color: record.totalPL < 0 ? "red" : "green" }}>
          {Math.abs(record?.totalPL + record?.commissionAmount).toFixed(2)}
        </span>
      ),
    },
  ];

  return (
    <div className="p-3">
      <p className="rounded bg-[#343435] p-1 shadow text-[var(--secondary-color)] text-[15px] font-bold uppercase">
        <span className="px-2">Profit & Loss By Events</span>
      </p>

      <div className="overflow-x-auto whitespace-nowrap mt-4 bg-white">
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={true}
          bordered={true}
        />
      </div>
    </div>
  );
}

export default ProfitLossEvents;

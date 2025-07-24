import { useState, useEffect } from "react";
import { Table } from "antd";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Appconfig from "../../../config/config";
import Helper from "../../../helper";

function ProfitLossBetHistory() {
  const params = useParams();
  const userInfo = Helper(); // get login user details

  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState({
    user_id: userInfo && userInfo?._id,
    match_id: params && params?.match_id,
    market_id: params && params?.market_id,
    event_type: params && params?.event_type_id,
    from_date: params && params?.from_date,
    to_date: params && params?.to_date,
  });

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

      render: (_, record) => (
        <div className="">
          {record?.event_type == "777"
            ? record?.remarks.split("(")[0].trim()
            : record.event_name}
        </div>
      ),
    },
    {
      title: "Market Name",
      sorter: true,

      render: (_, record) => (
        <div className="">
          {record?.event_type == "777"
            ? record?.game_code
            : record?.market_name}
        </div>
      ),
    },
    {
      title: "Selection Name",
      sorter: true,

      render: (_, record) => (
        <div className="">
          {record?.event_type == "777" ? "-" : record?.runner_name}
        </div>
      ),
    },
    {
      title: "Bet Type",
      sorter: true,

      render: (_, record) =>
        record.event_type == "777" ? (
          <div className="">{record?.transaction_type}</div>
        ) : record.is_back ? (
          <div className="">BACK</div>
        ) : (
          <div className="">Lay</div>
        ),
    },
    {
      title: "User Price",
      sorter: true,

      render: (_, record) => (
        <div className="">
          {record?.event_type == "777" ? "-" : record?.price_val}
        </div>
      ),
    },
    {
      title: "Amount",
      sorter: true,

      render: (_, record) => (
        <div className="">
          {record?.event_type == "777" ? "-" : record?.stake}
        </div>
      ),
    },

    {
      title: "Profit/Loss",
      dataIndex: "name",
      sorter: true,
      render: (_, record) =>
        record?.event_type == "777" ? (
          <span
            style={{
              color: record.transaction_type == "Debit" ? "red" : "green",
            }}
          >
            {" "}
            {record?.amount?.toFixed(2)}
          </span>
        ) : (
          <span style={{ color: record.totalPL < 0 ? "red" : "green" }}>
            {record?.totalPL?.toFixed(2)}
          </span>
        ),
    },

    {
      title: "Place Date",
      sorter: true,

      render: (_, record) => (
        <div className="">{new Date(record.createdAt).toLocaleString()}</div>
      ),
    },
    {
      title: "Match Date",
      sorter: true,

      render: (_, record) => (
        <div className="">{new Date(record.createdAt).toLocaleString()}</div>
      ),
    },
  ];

  useEffect(() => {
    filterProfitLossBetHistory();
  }, [params]);

  const filterProfitLossBetHistory = async (e) => {
    var data = JSON.stringify(formData);

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}reports/auraProfitLossBetHistory`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        try {
          setFilteredData(response.data.resultData);
        } catch (e) {
          // postErrorToslack(e.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        // postErrorToslack(error.message);
      });
  };

  return (
    <div className="p-3">
      <p className="rounded bg-[#343435] p-1 shadow text-[var(--secondary-color)] text-[15px] font-bold uppercase">
        <span className="px-2">Bet History</span>
      </p>

      <div className="overflow-x-auto whitespace-nowrap mt-4 bg-white">
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={true}
          bordered={true}
          x
        />
      </div>
    </div>
  );
}

export default ProfitLossBetHistory;

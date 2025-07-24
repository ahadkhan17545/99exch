import { useState, useEffect } from "react";
import { Table } from "antd";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Appconfig from "../../../config/config";
import Helper from "../../../helper";

function ProfitLossEventMarkets() {
  const params = useParams();
  const userInfo = Helper();

  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState({
    user_id: userInfo && userInfo?._id,
    match_id: params && params?.match_id,
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
          <div className=" ">Other</div>
        ),
    },
    {
      title: "Event Name",
      sorter: true,

      render: (_, record) => <div className="">{record.event_name}</div>,
    },
    {
      title: "Market Id",
      sorter: true,

      render: (_, record) =>
        record.market_name == "Fancy" ? (
          <div className="">{/* {record.selection_id} */} -</div>
        ) : (
          <div className="">{record.market_id}</div>
        ),
    },
    {
      title: "Market Name",
      sorter: true,

      render: (_, record) => (
        <Link
          className="text-blue-700"
          to={`/profit-loss-bet-history/${record.match_id}/${
            record.market_id ? record.market_id : "Fancy"
          }/${params?.from_date}/${params?.to_date}`}
        >
          {record.market_name}
        </Link>
      ),
    },
    {
      title: "Result",
      sorter: true,

      render: (_, record) => (
        <div className="">
          {record?.result_name ? record?.result_name : "-"}
        </div>
      ),
    },
    {
      title: "Profit/Loss",
      dataIndex: "name",
      sorter: true,
      render: (_, record) =>
        record.totalPL < 0 ? (
          <span className=" ">{record?.totalPL?.toFixed(2)}</span>
        ) : (
          <span className=" ">{record?.totalPL?.toFixed(2)}</span>
        ),
    },
    // {
    //     title: 'Commission',
    //     dataIndex: 'name',
    //     sorter: true,
    //     render: (_, record) => (
    //         <span className=''> {record?.commissionAmount?.toFixed(2)}</span>
    //     )
    // },
    {
      title: "Settle Time",
      sorter: true,

      render: (_, record) => (
        <div className="">{new Date(record.settledTime).toLocaleString()}</div>
      ),
    },
  ];

  useEffect(() => {
    filterProfitLossByEventMarkets();
  }, [params]);

  const filterProfitLossByEventMarkets = async (e) => {
    var data = JSON.stringify(formData);

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}reports/auraProfitLossByEventMarkets`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        try {
          console.log(response.data.resultData);
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
        <span className="px-2">Profit & Loss By Event Markets</span>
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

export default ProfitLossEventMarkets;

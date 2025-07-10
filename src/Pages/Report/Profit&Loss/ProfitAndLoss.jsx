import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Appconfig from "../../../config/config";
import Helper from "../../../helper";
import moment from "moment";
import { Table } from "antd";

function ProfitAndLoss() {
  const navigate = useNavigate();
  const userInfo = Helper();

  const [filteredData, setFilteredData] = useState([]);
  const [profitandloss2, setProfitAndLoss2] = useState(false);
  const [formData, setFormData] = useState({
    user_id: userInfo && userInfo?._id,
    from_date: moment().subtract(1, "days").format("YYYY-MM-DD"),
    to_date: moment().format("YYYY-MM-DD"),
  });

  useEffect(() => {
    filterProfitLoss();
  }, []);

  const filterProfitLoss = async (e) => {
    var data = JSON.stringify(formData);

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}reports/auraProfitLossByEventType`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        try {
          // console.log(response.data.resultData);
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

  const handleToDate = (newDate) => {
    if (newDate) {
      setFormData({
        ...formData,
        to_date: newDate,
      });
    }
  };

  const handleFromDate = (newDate) => {
    if (newDate) {
      setFormData({
        ...formData,
        from_date: newDate,
      });
    }
  };

  const columns = [
    {
      title: "Sport Name",
      dataIndex: "name",
      sorter: true,

      render: (_, record) =>
        record.event_type == 4 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Cricket
          </Link>
        ) : record.event_type == 2 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Tennis
          </Link>
        ) : record.event_type == 1 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Soccer
          </Link>
        ) : record.event_type == 777 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            WCO Casino
          </Link>
        ) : record.event_type == 7 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Horse Racing
          </Link>
        ) : record.event_type == 1004 ||
          record.event_type == 1005 ||
          record.event_type == 1007 ||
          record.event_type == 1008 ||
          record.event_type == 1009 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Casino
          </Link>
        ) : record.event_type == 4339 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Greyhound Racing
          </Link>
        ) : record.event_type == 27979456 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Kabaddi
          </Link>
        ) : record.event_type == 7522 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Basketball
          </Link>
        ) : record.event_type == 2378961 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Politics
          </Link>
        ) : record.event_type == 66101 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Virtual
          </Link>
        ) : record.event_type == 66104 ? (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Lottery
          </Link>
        ) : (
          <Link
            className="text-blue-700"
            to={`/profit-loss-event/${record.event_type}/${formData.from_date}/${formData.to_date}`}
          >
            Casino
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
    // {
    //   title: 'Commission',
    //   dataIndex: 'name',
    //   sorter: true,
    //   render: (_, record) => (
    //     <span className=''>{record?.commissionAmount?.toFixed(2)}</span>
    //   )
    // },
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
    <>
      <div className="p-3">
        <p className="rounded bg-[#343435] p-1 shadow text-white text-[15px] font-bold uppercase">
          <span className="px-2">Profit & Loss</span>
        </p>

        <div className="mt-2">
          <form>
            <div className="flex flex-row gap-2 text-black">
              <input
                type="date"
                name="from_date"
                onChange={(e) => handleFromDate(e.target.value)}
                value={formData?.from_date || new Date()}
                className="w-full p-2 rounded border mb-0"
              />
              <input
                type="date"
                name="to_date"
                onChange={(e) => handleToDate(e.target.value)}
                value={formData?.to_date || new Date()}
                className="w-full p-2 rounded border mb-0"
              />
            </div>
            <div className="flex gap-2 mt-3">
              <input
                type="button"
                value="submit"
                onClick={filterProfitLoss}
                className="bg-[#343435] text-white px-4 py-2 rounded cursor-pointer"
              />
              <input
                type="button"
                value="reset"
                className="bg-[#C10930] text-white px-4 py-2 rounded cursor-pointer"
              />
            </div>
          </form>
        </div>

        <div className="overflow-x-auto whitespace-nowrap mt-4 bg-white">
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={true}
            bordered={true}
          />
        </div>
      </div>
    </>
  );
}

export default ProfitAndLoss;

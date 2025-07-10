import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Appconfig from "../../config/config";
import Helper from "../../helper";
import moment from "moment";
import { Table } from "antd";

function AccountStatement() {
  const userInfo = Helper(); // get login user details

  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    user_id: userInfo && userInfo?._id,
    type: "0",
    from_date: moment().subtract(1, "days").format("YYYY-MM-DD"),
    to_date: moment().format("YYYY-MM-DD"),
    game_type: "All",
  });

  const getAccountStatement = async (e) => {
    console.log("formData", formData);

    var data = JSON.stringify(formData);
    //  console.log(data);
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}reports/aurafilteraccountStatement`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setData(response.data.resultData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAccountStatement();
  }, []);

  const columns = [
    // {
    //   title: 'Sr.no',
    //   dataIndex: '',
    //   render: (_, record, index) => (
    //     <span className=' '>
    //       {index}
    //     </span>
    //   )
    // },
    {
      title: "Date",
      dataIndex: "createdAt",
      sorter: true,
      render: (_, record) => (
        <span
          style={{ color: "#212529", fontWeight: 800, fontSize: "0.813rem" }}
        >
          {new Date(record.createdAt).toLocaleString()}
        </span>
      ),
    },
    {
      title: "Remark",
      dataIndex: "remarks",
      sorter: true,
      render: (_, record) => (
        <span
          style={{ color: "#212529", fontWeight: 800, fontSize: "0.813rem" }}
        >
          {record.remarks}
        </span>
      ),
    },
    {
      title: "Deposit",
      dataIndex: "amount",
      sorter: true,
      render: (_, record) =>
        record.transaction_type == "Credit" ? (
          <span
            style={{ color: "#508d0e", fontWeight: 800, fontSize: "0.813rem" }}
          >
            {record.amount}
          </span>
        ) : (
          "-"
        ),
    },
    {
      title: "Withdraw",
      dataIndex: "name",
      sorter: true,
      render: (_, record) =>
        record.transaction_type == "Debit" ? (
          // record.amount
          <span
            style={{ color: "#d50000", fontWeight: 800, fontSize: "0.813rem" }}
          >
            {record.amount}
          </span>
        ) : (
          "-"
        ),
    },
    {
      title: "From/To",
      sorter: true,
      render: (_, record) => (
        <span
          style={{
            color: "#212529",
            fontWeight: 800,
            fontSize: "0.813rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {record.from}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 17V7L16 12L9 17Z" />
          </svg>
          {record.to}
        </span>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      sorter: true,
      render: (_, record) => (
        <span
          style={{ color: "#212529", fontWeight: 800, fontSize: "0.813rem" }}
        >
          {record.balance}
        </span>
      ),
    },
  ];

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

  return (
    <>
      <div className="p-3">
        <p className="rounded bg-[#343435] p-1 shadow text-white text-[15px] font-bold uppercase">
          <span className="px-2">Account Statement</span>
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
                onClick={getAccountStatement}
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
            dataSource={data}
            pagination={true}
            bordered={true}
          />
        </div>
      </div>
    </>
  );
}

export default AccountStatement;

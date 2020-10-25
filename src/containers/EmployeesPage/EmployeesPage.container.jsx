import React, { useEffect, useState } from "react";
import "./EmployeesPage.styles.scss";
import { Button, Divider, Table } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import NewEmployeeModal from "./components/NewEmployeeModal/NewEmployeeModal";
import { fetchUsers } from "../../store/Users/Users.actions";
import { useDispatch, useSelector } from "react-redux";

const EmployeesPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersState.users);

  const [editedEmployee, setEditedEmployee] = useState(null);
  const [creatingEmployee, setCreatingEmployee] = useState(false);

  const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "User Name", dataIndex: "userName", key: "userName" },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (val) => {
        if (val === 0) {
          return "Admin";
        } else if (val === 1) {
          return "Employee";
        } else {
          return "User";
        }
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => {
        return (
          <Button
            type={"primary"}
            onClick={() => {
              setEditedEmployee(record.id);
              setCreatingEmployee(true);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={"EmployeesPage"}>
      <NewEmployeeModal
        employee={editedEmployee}
        visible={creatingEmployee}
        onClose={() => setCreatingEmployee(false)}
      />
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Employees</h2>
        <Button
          icon={<PlusCircleFilled />}
          type={"primary"}
          onClick={() => setCreatingEmployee(true)}
        >
          Add Employee
        </Button>
      </div>
      <Divider />
      <div>
        <Table dataSource={users} columns={columns} />
      </div>
    </div>
  );
};

export default EmployeesPage;

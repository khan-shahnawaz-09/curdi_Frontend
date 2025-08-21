import React, { useState } from "react";
import Filter from "./filter";
import Task from "./Task";
import axios from "axios";
import url from "../url";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const Taskpage = () => {
  //changing the url based on filter
  const [searchParams, setSearchParams] = useSearchParams();
  const [task, setTask] = useState([]); //adding task datas with filter

  //adding filter datas from e.target.value
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [priority, setPriority] = useState(searchParams.get("priority") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  //run the handleFilter function
  useEffect(() => {
    const handleFilter = async () => {
      const query = new URLSearchParams(); // its automatically add & after one pairs
      if (search) query.append("search", search);
      if (priority) query.append("priority", priority);
      if (status) query.append("status", status);
      if (sort) query.append("sort", sort);
      try {
        //fetch data
        const res = await axios.get(`${url}/task?${query.toString()}`);
        if (res.data.success) {
          setTask(res.data.tasks);
          setSearchParams(query);
        } else {
          console.log(res.data.msg);
        }
      } catch (error) {
        console.log("something went wrong", error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      handleFilter();
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [search, priority, status, sort, setSearchParams]);

  return (
    <div>
      <Filter
        setSearch={setSearch}
        setPriority={setPriority}
        setStatus={setStatus}
        setSort={setSort}
        search={search}
        priority={priority}
        status={status}
        sort={sort}
      ></Filter>
      <Task task={task} setTask={setTask}></Task>
    </div>
  );
};

export default Taskpage;

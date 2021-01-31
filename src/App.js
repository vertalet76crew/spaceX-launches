/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./App.scss";
import APIServise from "./apiServise";
import Select from "./components/Select/select";
import FilterPost from "./components/HOC/postFilter";

const App = () => {
  const [data, setData] = useState([]);
  const [dirty, setDirty] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Select");

  const [uniqueLaunchSites, setUniqueLaunchSites] = useState([]);
  const [uniqueRockets, setUniqueRockets] = useState([]);

  useEffect(async () => {
    const response = await APIServise.getData();
    setData(response);
  }, []);

  useEffect(() => {
    if (Boolean(data) && Boolean(data.length)) {
      const launchSet = new Set();
      const roketsSet = new Set();

      for (const elem of data) {
        launchSet.add(elem.launch_site.site_name);
        roketsSet.add(elem.rocket.rocket_name);
      }
      setUniqueLaunchSites([...launchSet]);
      setUniqueRockets([...roketsSet]);
    }
  }, [data]);

  return (
    <div className="App">
      <div className="select__wrap">
        <Select
          data={data}
          dropdownList={uniqueLaunchSites}
          setDirty={setDirty}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          filterName="Launch site"
        />
        <Select
          data={data}
          dropdownList={uniqueRockets}
          setDirty={setDirty}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          filterName="Rocket"
        />
      </div>
      {data &&
        data.map((post, i) => {
          return (
            <FilterPost
              dirty={dirty}
              key={post.flight_number + i}
              postData={post}
              activeFilter={activeFilter}
            />
          );
        })}
    </div>
  );
};
export default App;

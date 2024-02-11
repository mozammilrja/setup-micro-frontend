import React, { Suspense } from "react";
const RemoteApp1 = React.lazy(() => import("app1/App"));
const RemoteApp2 = React.lazy(() => import("app2/App"));
const RemoteApp3 = React.lazy(() => import("app3/App"));
// const RemoteApp4 = React.lazy(() => import("next-app/src/app/page"));

const ContainerApp = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Container App</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp1 />
        <RemoteApp2 />
        <RemoteApp3 />
        {/* <RemoteApp4 /> */}
      </Suspense>
    </div>
  );
};

export default ContainerApp;

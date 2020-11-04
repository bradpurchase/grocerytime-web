import * as React from "react";

interface Props {
  children?: React.ReactNode
}

const PageContainer: React.FC<Props> = React.memo((props) => (
  <div className="container p-10 flex flex-col">
    {props.children}
  </div>
))

export default PageContainer

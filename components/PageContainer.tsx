import * as React from "react";

interface Props {
  children?: React.ReactNode;
  pageStyle?: String;
}

const PageContainer: React.FC<Props> = React.memo((props) => (
  <div className="p-6 lg:p-10 flex flex-col items-center justify-center">
    <div className={props.pageStyle == "mini" ? "lg:w-1/2" : "w-full"}>
      {props.children}
    </div>
  </div>
));

export default PageContainer;

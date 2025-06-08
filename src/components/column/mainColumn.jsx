import React from "react";

const MainColumn = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} />
));

export default MainColumn;

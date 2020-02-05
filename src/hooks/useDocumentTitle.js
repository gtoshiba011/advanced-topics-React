import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    // function is called every time the component is rendered
    document.title = title;
    return () => {
      console.log("clean up");
    };
  });
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount
}

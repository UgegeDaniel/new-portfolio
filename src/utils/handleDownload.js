import { saveAs } from "file-saver";
const handleDownload = () => {
    saveAs(
      "../../public/resume.pdf",
      "Resume.pdf"
    )
  }
export default handleDownload
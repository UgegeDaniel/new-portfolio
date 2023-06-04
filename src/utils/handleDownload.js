import { saveAs } from "file-saver";
const handleDownload = () => {
    saveAs(
      "../../public/ugege-daniel-portfolio-resume.docx",
      "Resume.pdf"
    )
  }
export default handleDownload

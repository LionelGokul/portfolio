import Button from './Button'

interface ResumeButtonProps {
  className?: string
}

const ResumeButton = ({ className }: ResumeButtonProps) => {
  return (
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1BWTEgF3uaw0dKmKfHrd4zEDM-vVHRTSo/view?usp=sharing"
      rel="noopener noreferrer"
    >
      <Button className={className}>Resume</Button>
    </a>
  )
}

export default ResumeButton

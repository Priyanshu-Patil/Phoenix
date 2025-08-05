import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const PageTitle = ({title}) => {
  return (
    <Helmet>
        {title}
    </Helmet>
  )
}

PageTitle.propTypes = {
    title: PropTypes.string,
}

export default PageTitle
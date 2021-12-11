
import './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selecDrectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../../components/Menu-Item';

const Directory = ({sections}) =>(
  <div className="directory-menu">
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections : selecDrectorySections
})
  

export default connect(mapStateToProps)(Directory)
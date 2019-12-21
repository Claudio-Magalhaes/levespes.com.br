import styled from 'styled-components'
import PropTypes from 'prop-types';

import {baseDeCores as cores} from '../../../../../_core/Variable'

// ICONS MATERIAL-UI
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


export {
    IconWhpp,
    IconTel,
    IconCalend,
    IconEmail
}


const IconWhpp = styled(WhatsAppIcon)`
border-radius: 10px;
font-size: 40pt !important;
text-decoration: none;
color: ${cores.verdeClaro};
width: 25% !important;

:hover{
transition: 0.5s;
color: ${cores.verdeEscuro};
background: ${cores.verdeClaro};
}
`;


const IconTel = styled(PhoneIcon)`
border-radius: 10px;
font-size: 40pt !important;
text-decoration: none;
color: ${cores.verdeClaro};
width: 25% !important;

:hover{
transition: 0.5s;
color: ${cores.verdeEscuro};
background: ${cores.verdeClaro};
}
`;


const IconCalend = styled(CalendarTodayIcon)`
border-radius: 10px;
font-size: 40pt !important;
text-decoration: none;
color: ${cores.verdeClaro};
width: 25% !important;

:hover{
transition: 0.5s;
color: ${cores.verdeEscuro};
background: ${cores.verdeClaro};
}
`;


const IconEmail = styled(MailOutlineIcon)`
border-radius: 10px;
font-size: 40pt !important;
text-decoration: none;
color: ${cores.verdeClaro};
width: 25% !important;

:hover{
transition: 0.5s;
color: ${cores.verdeEscuro};
background: ${cores.verdeClaro};
}
`;
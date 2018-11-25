var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1199.1px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '991.1px'
        },
        sm: {
            width: '767.1px'
        },
        xs: {
            width: '560px'
        },
        xxs: {
            width: '375px'
        }
    },
    oldSizeStyle: false
};
 
smartgrid('src/less', settings);
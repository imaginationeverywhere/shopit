import React from 'react'; 
 
function Layout( props ) {
    return (
        <>
            <div className="page-wrapper"> 
                {
                    props.children
                }
            </div>
 
        </>
    );
}

export default Layout;


import React from 'react'

const ExtLink = ({href, children}) => <a href={href} target="_blank" rel="noopener">{children}</a>;

export default ExtLink;

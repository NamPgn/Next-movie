import React from 'react';
import { Breadcrumb } from 'antd';

const MyBreadcrumb = ({ separator, items }:any): any => {
  return (
    <Breadcrumb
      separator={separator}
      itemRender={items}
    />
  )
}

export default MyBreadcrumb
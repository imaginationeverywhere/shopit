import React from "react";
import { Helmet } from "react-helmet";
import classes from './styles/templates.module.scss';
import TemplateTable from './ui/TemplateTable'


function Templates () {
 
  return (
    <>
      <Helmet>
        <title>Shopit|Admin Templates</title>
      </Helmet>
      <section className={classes["templates-wrapper"]}>
      <h2>Templates</h2>
      <TemplateTable />

      </section>
    </>
  );
}

export default Templates;

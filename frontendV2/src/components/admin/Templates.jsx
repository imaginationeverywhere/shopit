import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { getAllTemplates, setTemplate } from "../../actions";
import templates from "../../mock-server/templates.json";
import classes from './styles/templates.module.scss';
import TemplateTable from './ui/TemplateTable'


function Templates () {
  const dispatch = useDispatch();
  //const { templates } = useSelector((state) => state);
  let [templateStatus, setTemplateStatus] = useState({
    templates,
    activeTemplate: null,
  });

  useEffect(() => {
    dispatch(getAllTemplates());
  }, []);

  const selectTemplate = (id) => {
    const i = id - 1;
    setTemplateStatus({
      ...templateStatus,
      activeTemplate: templateStatus.templates[i],
    });
    console.log(templateStatus.templates[i]);
    console.log(templateStatus.activeTemplate);

    return i;
  };

  const toggleSelectedTemplate = (id) =>{
    const i = id - 1;
    if (templateStatus.activeTemplate === templateStatus.templates[i]) {

    }
  }

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

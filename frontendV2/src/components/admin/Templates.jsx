import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { getAllTemplates, setTemplate } from "../../actions";
import templates from "../../mock-server/templates.json";
import classes from './styles/templates.module.scss';

const ActiveButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 180px;
  padding: 1.25rem;
  border-radius: 0.25rem;
  background: ${({ isActive }) => (isActive ? "green" : "gray")};
  color: white;
`;

function Templates({ history }) {
  const dispatch = useDispatch();
  //const { templates } = useSelector((state) => state.templates);
  let [templateStatus, setTemplateStatus] = useState({
    templates,
    activeTemplate: null,
  });

  useEffect(() => {
    dispatch(getAllTemplates());
  }, []);

  const toggleTemplate = (id) => {
    const i = id - 1;
    setTemplateStatus({
      ...templateStatus,
      activeTemplate: templateStatus.templates[i],
    });
    console.log(templateStatus.templates[i]);
    console.log(templateStatus.activeTemplate);

    return i;
  };

  return (
    <>
      <Helmet>
        <title>Shopit|Admin Templates</title>
      </Helmet>
      <h2>Templates</h2>
      <table className={classes['templates-table']}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
        {templateStatus.templates.map(({ id, name, isActive }) => {
          const [active, setIsActive] = useState(isActive);
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td className={classes['templates-table-actions']}>
                {
                  <ActiveButton
                    isActive={active}
                    onClick={() => {
                      toggleTemplate(id);
                      setIsActive(!active);
                      dispatch(setTemplate(id));
                    }}
                  >
                    {active ? "Active" : "Set Template"}
                  </ActiveButton>
                }
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Templates;

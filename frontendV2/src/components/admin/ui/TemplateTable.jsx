import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classes from "../styles/templates.module.scss";
import {
  getAllTemplates,
  setTemplate,
  previewTemplate,
} from "../../../actions";

const ActiveButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 180px;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
  background: ${({ isActive }) => (isActive ? "green" : "gray")};
  color: white;
  :hover {
    background: white;
    color: green;
    border: 1px solid green;
  }
  transition: 0.1s linear;
`;

function TemplateTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTemplates());
  }, []);

  const { templates, loading } = useSelector((state) => state.templates);

  if (templates.length < 1) return null;


  return (
    <table className={classes["templates-table"]}>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
      {templates.map(({ templateId, name, isActive }) => {
        const handlePreview = () => {
          previewTemplate(templateId);
          dispatch({type: 'PREVIEW_TEMPLATE', id: templateId})
        }
      
        return (
          <tr key={templateId}>
            <td>{templateId}</td>
            <td>{name}</td>
            <td className={classes["templates-table-actions"]}>
              {
                <>
                  <Link
                    to={`/templates/preview/${templateId}`}
                    target="_blank"
                    onClick={handlePreview}
                  >
                    Preview
                  </Link>

                  <ActiveButton
                    onClick={setTemplate(templateId)}
                    isActive={isActive}
                  >
                    {loading ? "Loading..." : ""}
                    {!loading && isActive ? "Active" : "Set Template"}
                  </ActiveButton>
                </>
              }
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default TemplateTable;

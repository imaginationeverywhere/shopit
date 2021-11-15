import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import classes from '../styles/templates.module.scss';
import { getAllTemplates, setTemplate } from "../../../actions";

const ActiveButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 180px;
  padding: 1.25rem;
  border: 1px solid gray;
  border-radius: 0.25rem;
  background: ${({ isActive }) => (isActive ? "green" : "gray")};
  color: white;
  :hover{
    background: white;
    color: green;
    border: 1px solid green;
  }
  transition: 0.1s linear;
`;

function TemplateTable() {
    const { templates } = useSelector((state) => state.templates);


    if (templates.length < 1) return;
    return (
        <table className={classes['templates-table']}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            {templates.map(({ templateId, name, isActive }) => {
                return (
                    <tr key={templateId}>
                        <td>{templateId}</td>
                        <td>{name}</td>
                        <td className={classes['templates-table-actions']}>
                            {
                                <ActiveButton
                                    isActive={isActive}
                                    onClick={setTemplate(templateId)}
                                >
                                    {isActive ? "Active" : "Set Template"}
                                </ActiveButton>
                            }
                        </td>
                    </tr>
                );
            })}
        </table>
    );
}

export default TemplateTable;

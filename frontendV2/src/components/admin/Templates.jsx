import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { getTemplates } from "../../actions/templateAction";
import templates from "../../mock-server/templates.json";

function Templates({ history }) {
  const dispatch = useDispatch();
  //const { templates } = useSelector((state) => state.templates);

  useEffect(() => {
    dispatch(getTemplates());
  }, [dispatch]);
  console.log(templates);
  const setProducts = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
        },
      ],
      rows: [],
    };

    templates.forEach(({id, name}) => {
      data.rows.push({
        id: id,
        name: name,
        actions: (
          <Fragment>
            <Link
              to={`/admin/template/${id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
          </Fragment>
        ),
      });
    });

    return data;
  };

  return (
    <>
      <Helmet>
        <title>Shopit|Admin Templates</title>
      </Helmet>
      <h2>Templates</h2>
      <MDBDataTable
        data={setProducts()}
        className="px-3"
        bordered
        striped
        hover
      />
    </>
  );
}

export default Templates;

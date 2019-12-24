import React, { Component } from 'react'
import './style.css'
import ReactTable from "react-table"
class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            info: "",
            cost: "",
            value: "",
            inputText: '',
        };
    }
    // setState = {
    //     id: "",
    //     name: "",
    //     info: "",
    //     cost: "",

    // }
    render() {

        let list = this.props.listProducts
        let show;


        if (list) {
            show = list.map((item, key) => {

                return (

                    <tr key={key}>
                        <td className="initLoad">{item.id} </td>
                        <td className="initLoad">{item.name} </td>
                        <td className="initLoad"> {item.info}</td>
                        <td className="initLoad"> {item.cost}</td>
                        <td colSpan="2">
                            <div>
                                <button type="button" className="btn btn-info btn-sm"
                                    data-toggle="modal"
                                    data-target="#edit"
                                    onClick={() => {

                                        this.setState({
                                            name: item.name,
                                            cost: item.cost,
                                            id: item.id,
                                            info: item.info
                                        })
                                        console.log("state1" + this.state)
                                    }}
                                > Chọn </button>

                                <div id="edit" className="modal fade" role="dialog">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">×</button>
                                                <h4 className="modal-title">Sửa thông tin sản phẩm</h4>
                                            </div>
                                            <div className="modal-body">
                                                <div align="center">
                                                    <label className="label">Hello</label>
                                                    <div>
                                                        <label >MSSP</label>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="MSSP muốn sửa"

                                                            onChange={(e) => this.setState({
                                                                id: e.target.value
                                                            })}
                                                            value={this.state.id}
                                                            disabled
                                                        />
                                                    </div>
                                                    <div>
                                                        <label>Tên sản phẩm</label>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="Tên"
                                                            onChange={(e) => {
                                                                console.log("e" + e.target)
                                                                this.setState({
                                                                    name: e.target.value,


                                                                })
                                                            }}
                                                            value={this.state.name}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label>Thông tin sản phẩm</label>
                                                        <input type="text"
                                                            placeholder="Thông tin"
                                                            class="form-control"
                                                            onChange={(e) => this.setState({
                                                                info: e.target.value
                                                            })}
                                                            value={this.state.info}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label>Giá </label>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="Giá"
                                                            onChange={(e) => {
                                                                this.setState({
                                                                    cost: e.target.value

                                                                })
                                                            }}
                                                            value={this.state.cost}
                                                        />

                                                    </div>

                                                    <button data-dismiss="modal"
                                                        onClick={(e) => {

                                                            if ((this.state.id) && (this.state.id != null)) {
                                                                this.props.editProducts(this.state)
                                                            } else {
                                                                console.log("AAA", e.target);
                                                                e.target.placeholder = "BBBB";
                                                            }
                                                        }}>
                                                        Sửa </button>

                                                    <button

                                                        onClick={() => {

                                                            this.setState({
                                                                id: "",
                                                                name: "",
                                                                info: "",
                                                                cost: "",

                                                            })
                                                            console.log("state 2" + JSON.stringify(this.state))
                                                        }
                                                        }>
                                                        Clear
                                                     </button>

                                                </div>
                                            </div>


                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default"
                                                    data-dismiss="modal">
                                                    Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div colSpan="2">

                                <button type="button"
                                    className="btn btn-danger"
                                    data-toggle="modal"
                                    data-target={"#delete"+key}
                                >
                                    Xóa
                            </button>
                                <div className="modal fade" id={"delete"+key} role="dialog">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title">Có xóa không</h4>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button"
                                                    style={{
                                                        width: "100px",
                                                    }}
                                                    className="btn btn-danger"
                                                    data-dismiss="modal"
                                                    onClick={() => {
                                                        // console.log("id" + item.id)
                                                        {
                                                            this.props.deleteProducts(item.id)
                                                        }
                                                    }}
                                                >Có</button>

                                                <button type="button"
                                                    className="btn btn-success"
                                                    data-dismiss="modal"
                                                    style={{
                                                        width: "100px",
                                                    }}
                                                >Không</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>



                )

            }
            )
        }

        return (
            <div>
                <div>
                    <input className="form-control" type="text"
                        style={{
                            "width": "200px",
                            float: "left"
                        }}
                        onChange={(e) =>
                            this.setState({ inputText: e.target.value })
                        }
                    >
                    </input>
                    <button
                        style={{ float: "left" }}
                        type="button" className="btn btn-primary btn-lg"
                        onClick={(e) => {
                            if (this.state.inputText) {
                                this.props.searchProducts(this.state.inputText)
                            }
                        }
                        }
                    >
                        search
            </button>
                </div>
                <div>
                    <table className="initLoad" border="2" color="black" align="center">
                        <tbody>
                            {/* <ReactTable
                        defaultPageSize= {5}
                        > */}
                            <tr>
                                <th>MSSP</th>
                                <th>Tên</th>
                                <th>Thông tin</th>
                                <th >Giá</th>
                            </tr>
                            {show}

                            {/* </ReactTable> */}
                            <div align="center">
                                <button type="button" class="btn btn-primary btn-lg"
                                    data-toggle="modal"
                                    data-target="#addModal">
                                    Thêm</button>

                                <div id="addModal"
                                    class="modal fade"
                                    tabindex="-1"
                                    role="dialog">


                                    <div class="modal-dialog"
                                        role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button"
                                                    className="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close">
                                                    <span aria-hidden="true">&times;</span></button>
                                                <h4 class="modal-title">Thêm thông tin sản phẩm</h4>
                                            </div>
                                            <div>
                                                <input class="form-control"
                                                    type="text"
                                                    placeholder="Tên"
                                                    onChange={(e) =>
                                                        this.setState({
                                                            name: e.target.value,

                                                        })
                                                    }
                                                    value={this.state.name}


                                                />
                                            </div>

                                            <div>
                                                <input class="form-control" type="text" placeholder="Thông tin"
                                                    onChange={(e) => this.setState({
                                                        info: e.target.value
                                                    })}
                                                    value={this.state.info}
                                                />
                                            </div>
                                            <div>
                                                <input class="form-control"
                                                    type="text" placeholder="Gia"
                                                    onChange={(e) => this.setState({
                                                        cost: e.target.value
                                                    })

                                                    }
                                                    value={this.state.cost}

                                                />
                                            </div>

                                            <button data-dismiss="modal"
                                                onClick={() => {
                                                    console.log("COST" + this.state.name)
                                                    if ((this.state.name !== "") && (this.state.cost !== "") && (this.state.info !== "")) {
                                                        this.props.addProducts(this.state)
                                                    }
                                                    else {
                                                        this.setState({
                                                            placeholders: 'Nhap vao'
                                                        })
                                                    }
                                                }
                                                }>Thêm</button>
                                            <button
                                                onClick={() => this.setState({
                                                    id: "",
                                                    name: "",
                                                    info: "",
                                                    cost: "",
                                                    placeholders: "Gia"

                                                })}
                                            >
                                                clear
                                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tbody>
                    </table>

                </div>
            </div>


        );
    }
}

export default Components;   
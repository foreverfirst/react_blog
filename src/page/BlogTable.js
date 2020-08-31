import React from "react";
import {Input,Button} from "antd";

export default class BlogTable extends React.Component {

    render() {
        return super.render(
            <div>
                <Input placeholder={"通过标题搜索该分类下的博客..."} onChange={this.}>

                </Input>
                <ActionButton></ActionButton>
                <Button>

                </Button>
            </div>
        );
    }

}
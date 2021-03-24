import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <nav aria-label="Page navigation example " className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-item">
                        &lt;% if (currentPage !== 1 &amp;&amp; previousPage !== 1) {'{'} %&gt;
                        <a className="page-link" href="/home?page=1">1</a>
                        &lt;% {'}'} %&gt;
                    </li>
                    <li className="page-item">
                        &lt;% if (hasPreviousPage) {'{'} %&gt;
                        <a className="page-link" href="/home?page=<%= previousPage %>">&lt;%= previousPage%&gt;</a>
                        &lt;% {'}'} %&gt;
                    </li>
                    <li className="page-item">
                        <a className="page-link active" href="/home?page=<%= currentPage %>">&lt;%= currentPage%&gt; <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item">
                        &lt;% if (hasNextPage) {'{'} %&gt;
                        <a className="page-link" href="/home?page=<%= nextPage %>">&lt;%= nextPage%&gt;</a>
                        &lt;% {'}'} %&gt;
                    </li>
                    <li className="page-item disabled">
                        &lt;% if (lastPage !== currentPage &amp;&amp; nextPage !== lastPage) {'{'} %&gt;
                        <a className="page-link" href="/home?page=<%= lastPage %>">&lt;%= lastPage %&gt;</a>
                        &lt;% {'}'} %&gt;
                    </li>
                </ul>
            </nav>
        )
    }
}

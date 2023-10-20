import {fill2Objects} from './object-fn.js'

const HasPagination = {
    data() {
        return {
            items: {
                total: 0,
                lastPage: 0,
                last_page: 0,
                data: [],
                perPage: 9,
                per_page: 9,
                currentPage: 1,
                current_page: 1,
                from: 0,
                to: 0,
                first_page_url: null,
                last_page_url: null,
                prev_page_url: null,
                next_page_url: null,
            },
            snakeCase: false,
        }
    },
    methods: {
        setPage(page) {
            if (this.snakeCase)
                this.items.current_page = page
            else
                this.items.currentPage = page
        },
        fillPaginationData(data) {
            fill2Objects(data, this.items)
            if (this.snakeCase) {
                this.items.currentPage = this.items.current_page
                this.items.lastPage = this.items.last_page
                this.items.perPage = this.items.per_page
            } else {
                this.items.current_page = this.items.currentPage
                this.items.last_page = this.items.lastPage
                this.items.per_page = this.items.perPage
            }
        },
        setPerPage(per_page) {
            if (this.snakeCase)
                this.items.per_page = per_page
            else
                this.items.perPage = per_page
        },
    },
    computed: {
        pagination() {
            return this.pageCount > 1
        },
        page() {
            return this.snakeCase ? this.items.current_page : this.items.currentPage
        },
        pageCount() {
            return this.snakeCase ? this.items.last_page : this.items.lastPage
        },
        perPage() {
            return this.snakeCase ? this.items.per_page : this.items.perPage
        },
    },
}
export default HasPagination

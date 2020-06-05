import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverComponent } from '@fundamental-ngx/core';

@Component({
    selector: 'fd-table-column-sorting-example',
    templateUrl: './table-column-sorting-example.component.html'
})
export class TableColumnSortingExampleComponent implements OnInit {
    tableRows;
    filteredRows;
    column1SortDir: string = 'none';
    dateSortDir: string = 'none';
    filterVal: string = '';

    @ViewChild('column1SortPopover')
    column1SortPopover: PopoverComponent;

    sortColumn1(dir: string) {
        this.dateSortDir = 'none';
        this.column1SortPopover.close();
        if (dir === 'asc') {
            this.tableRows.sort((val1, val2) => {
                if (val1.column1 < val2.column1) {
                    return -1;
                } else if (val1.column1 > val2.column1) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (dir === 'desc') {
            this.tableRows.sort((val1, val2) => {
                if (val1.column1 > val2.column1) {
                    return -1;
                } else if (val1.column1 < val2.column1) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
    }

    filterChange(searchTerm: string) {
        const searchLower = searchTerm.toLocaleLowerCase();
        this.filteredRows = this.tableRows.filter((item) => {
            if (item) {
                return item.column1.toLocaleLowerCase().includes(searchLower);
            }
        });
    }

    ngOnInit() {
        this.tableRows = [
            {
                column1: 'Apple',
                column2: 'Row 1',
                column3: 'Row 1',
                date: '09-07-18',
                type: 'search'
            },
            {
                column1: 'Banana',
                column2: 'Row 2',
                column3: 'Row 2',
                date: '09-08-18',
                type: 'cart'
            },
            {
                column1: 'Kiwi',
                column2: 'Row 3',
                column3: 'Row 3',
                date: '02-14-18',
                type: 'calendar'
            },
            {
                column1: 'Peach',
                column2: 'Row 4',
                column3: 'Row 4',
                date: '12-30-17',
                type: 'search'
            },
            {
                column1: 'Strawberry',
                column2: 'Row 5',
                column3: 'Row 5',
                date: '11-12-18',
                type: 'search'
            }
        ];
        this.filteredRows = this.tableRows;
    }
}
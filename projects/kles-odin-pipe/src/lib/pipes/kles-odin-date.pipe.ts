
import { Pipe, PipeTransform } from "@angular/core";
import { UserService } from "@infor-up/m3-odin-angular";
import * as moment from "moment";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Pipe({ name: "klesodindate", pure: true })
export class KlesOdinDatePipe implements PipeTransform {

    constructor( private userService: UserService) {
    }

    transform(date: Date): Observable<string> {
        if (date) {
            return this.userService.getUserContext().pipe(
                map(context => {
                    console.log(context)
                    const format = context.dateFormat?.toUpperCase() || 'YYMMDD';
                    return moment(date).format(format);

                }))
        } else {
            return of('');
        }

    }


}

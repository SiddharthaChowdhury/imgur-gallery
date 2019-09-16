import {Request, Response} from 'express';
import * as request from "request";

export const getImages = (req: Request, res: Response) => {
    const {showViral, section, sort, window, page} = req.body;
    /*
        section	:	hot | top | user. Defaults to hot
        sort	:	viral | top | time | rising (only available with user section). Defaults to viral
        page	:	integer - the data paging number
        window	:	Change the date range of the request if the section is top. Accepted values are day | week | month | year | all. Defaults to day
    */

    const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page || 1}?showViral=${!!showViral}&mature=false&album_previews=false`;

    const options: request.Options = {
        method: 'GET',
        url,
        headers: {
            "Authorization": `Client-ID ${process.env.client_id}`
        }
    };

    request.get(options, (error: any, response: request.Response, respBody: any) => {
        if (error) throw error;

        if(response.statusCode === 200) {

            const data = respBody.data;

            res.status(200);
            return res.json({data});
        }

        res.status(500);
        return res.json({error: "Internal server error!"})
    })

}
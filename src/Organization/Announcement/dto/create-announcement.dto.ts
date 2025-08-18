import { ApiProperty } from "@nestjs/swagger";
export class CreateAnnouncementDto {
    @ApiProperty({ example: 'New Announcements', description: 'title of announcement' })
    title: string;

    @ApiProperty({ example: 'hr', description: 'name of dept' })
    publishedFor: string;

    @ApiProperty({ example: '21/05/2021', description: 'start date' })
    startDate: Date;

    @ApiProperty({ example: '22/05/2021', description: 'end date' })
    endDate: Date;

    @ApiProperty()
    company: string;

    @ApiProperty()
    location: string;


    @ApiProperty()
    publishedBy: string;

    @ApiProperty({ example: 'Tomorrow will be holiday on behalf of Moharram', description: 'The summary of the announcement' })
    summary: string;

    @ApiProperty()
    description: string;

}
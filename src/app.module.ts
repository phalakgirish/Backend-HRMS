import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DepartmentModule } from './Organization/Department/department.module';
import { DesignationModule } from './Organization/Designation/designation.module';
import { AnnouncementModule } from './Organization/Announcement/announcement.module';
import { OrgpolicyModule } from './Organization/OrgPolicies/orgpolicy.module';
import { ExpenseModule } from './Organization/expense/expense.module';
import { AwardsModule } from './Employees/Awards/awards.module';
import { TransferModule } from './Employees/transfers/transfer.module';
import { ResignationModule } from './Employees/resignation/resignation.module';
import { PromotionModule } from './Employees/promotion/promotion.module';
import { ComplaintModule } from './Employees/complaint/complaint.module';
import { WarningsModule } from './Employees/warnings/warnings.module';
import { TravelModule } from './Employees/Travel/travel.module';
import { TerminationModule } from './Employees/termination/termination.module';
import { EmployeeExitModule } from './Employees/employeeExit/employeeExit.module';
import { LocationModule } from './Organization/Location/location.module';
import { EmployeeModule } from './Employees/employee/employee.module';
import { LeaveModule } from './Timesheet/leave/leave.module';
import { HolidayModule } from './Timesheet/holiday/holiday.module';
import { PerformanceIndicatorModule } from './performance/performance-indicator/performanceIndicator.module';
import { PerformanceAppraisalModule } from './performance/performace-appraisal/performanceAppraisal.module';
import { TrainersListModule } from './Training/trainersList/trainersList.module';
import { TrainingListModule } from './Training/trainingList/trainingList.module';
import { TrainingTypeModule } from './Training/trainingType/trainingType.module';
import { UpdateAttendanceModule } from './Timesheet/updateAttendance/updateAttendance.module';
import { FilesManagerModule } from './FilesManager/filesmanager.module';
import { ProjectsModule } from './Projects/projects.module';
import { SupportRequestModule } from './supportRequest/supportRequest.module';
import { ConstantsModule } from './constants/constants.module';
import { FilesModule } from './filesSupportReq/files.module';
import { SetRolesModule } from './SetRoles/setRoles.module';
import { JobCandidateModule } from './jobCandidate/JobCandidate.module';
import { EmailTemplateModule } from './emailTemplate/emailTemplate.module';
import { UsersModule } from './users/users.module';
import { OfficeShiftModule } from './officeShift/OfficeShift.module';
import { EmployeeFamilyModule } from './Employees/employee-family/employee-family.module';
import { EmployeeQualificationModule } from './Employees/employee-qualification/employee-qualification.module';
import { EmployeeExperienceModule } from './Employees/employee-experience/employee-experience.module';
import { EmployeeDocumentModule } from './Employees/employee-document/employee-document.module';
import { EmployeeBankaccountModule } from './Employees/employee-bankaccount/employee-bankaccount.module';
import { EmployeeShiftModule } from './Employees/employee-shift/employee-shift.module';
import { EmployeeLocationModule } from './Employees/employee-location/employee-location.module';
import { EmployeeAssetsModule } from './Employees/employee-assets/employee-assets.module';
import { ProfilePictureModule } from './Employees/profile-picture/profile-picture.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/hrms-api'),
     DepartmentModule,DesignationModule,AnnouncementModule, OrgpolicyModule,
    AuthModule, AwardsModule, ResignationModule,PromotionModule, ComplaintModule, WarningsModule, TravelModule,
    ExpenseModule, TerminationModule, EmployeeExitModule, LocationModule, EmployeeModule, LeaveModule, HolidayModule, 
    TransferModule,PerformanceIndicatorModule, PerformanceAppraisalModule , TrainersListModule, TrainingTypeModule,
    UpdateAttendanceModule, FilesManagerModule, ProjectsModule, SupportRequestModule , ConstantsModule, FilesModule,
    TrainingListModule, SetRolesModule, JobCandidateModule, EmailTemplateModule, UsersModule ,UsersModule,OfficeShiftModule,
    EmployeeFamilyModule, EmployeeQualificationModule, EmployeeExperienceModule, EmployeeDocumentModule, EmployeeBankaccountModule,
    EmployeeShiftModule, EmployeeLocationModule, EmployeeAssetsModule, ProfilePictureModule, SettingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

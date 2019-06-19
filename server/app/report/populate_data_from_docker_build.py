import django
import os
import sys
import initial_data.reports


if __name__ == "__main__":
    # QUICK DJANGO ENV CLEANING UP SO THAT IT'S ABLE TO BE CALLED ANY UNDER PROJECT
    PROJECT_PATH = os.path.split(os.path.realpath(__file__))[0]
    if os.path.exists(
            PROJECT_PATH +
            "/manage.py") and sys.path[0] != PROJECT_PATH:
        sys.path = [PROJECT_PATH] + sys.path
    else:
        PROJECT_PATH = os.path.split(PROJECT_PATH)[0]
        if os.path.exists(
                PROJECT_PATH +
                "/manage.py") and sys.path[0] != PROJECT_PATH:
            sys.path = [PROJECT_PATH] + sys.path
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")
    django.setup()
    # QUICK DJANGO ENV CLEANING UP SO THAT IT'S ABLE TO BE CALLED ANY UNDER PROJECT

    from report.models import Report
    text_file = open(
        '/home/docker/code/app/report/initial_data/is_data_initialized.txt',
        'r')
    is_initialized_data = int(text_file.read())
    text_file.close()

    if is_initialized_data:
        print "it's already initialized! Continue."
    else:
        reports = initial_data.reports.data
        print "initializing human tables..."

        for report in reports:
            reportToSave = Report()
            reportToSave.reference_id = report["id"]
            reportToSave.status = report["state"]
            reportToSave.message = report["payload"]["message"]
            reportToSave.report_type = report["payload"]["reportType"]
            reportToSave.save()
            print reportToSave
        print "... Populating Reports DONE!"

        text_file = open(
            '/home/docker/code/app/report/initial_data/is_data_initialized.txt',
            'w')
        text_file.write('1')

        print "All Done successfully! woo foo!!"

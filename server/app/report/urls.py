from django.conf.urls import url
from .views import report_handler, get_post_reports

urlpatterns = [
    url(
        r'^$',
        get_post_reports,
        name='get_post_reports'
    ),
    url(
        r'^(?P<reference_id>[-\w]+)/$',
        report_handler,
        name='report_handler'
    )
]

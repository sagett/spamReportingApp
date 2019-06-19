from __future__ import unicode_literals

from django.db import models


class Report(models.Model):
    reference_id = models.CharField(null=False, max_length=200)
    status = models.CharField(null=False, max_length=200)
    message = models.CharField(null=True, max_length=200)
    source = models.CharField(null=False, max_length=200)
    report_type = models.CharField(null=False, max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

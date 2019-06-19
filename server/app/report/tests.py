from django.test import TestCase
from .models import Report
import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from django.core import serializers
from .serializers import ReportSerializer

client = Client()

class GetAllReportsTest(TestCase):
    def setUp(self):
        Report.objects.create(
            reference_id='sample-reference-id-string',
            status="",
            message="",
            source="",
            report_type="")

    # GET METHODO REQUEST TEST: should fetch all reports data
    def test_get_all_reports(self):
        response = client.get(reverse('get_post_reports'))
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)

        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # POST INVALID METHODO REQUEST TEST: http method should be not-allowd
    def test_post_all_reports(self):
        response = client.put(
            reverse('get_post_reports'),
            data=json.dumps({}),
            content_type='application/json'
            )

        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    # PUT INVALID METHODO REQUEST TEST: http method should be not-allowd
    def test_put_all_reports(self):
        response = client.put(
            reverse('get_post_reports'),
            data=json.dumps({}),
            content_type='application/json'
            )

        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

class ResolveReportTest(TestCase):
    def setUp(self):
        self.report_1 = Report.objects.create(
            reference_id='sample-reference-id-string',
            status="",
            message="",
            source="",
            report_type="")
        self.valid_payload = {"ticketState": "CLOSED"}
        self.in_valid_payload = {}

    # VALID PUT REQUEST
    def test_put_report_resolve_status_valid(self):
        response = client.put(
            reverse('report_handler', kwargs={'reference_id': self.report_1.reference_id}),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # INVALID PAYLOAD: should indicate bad request
    def test_put_report_resolve_status_in_valid(self):
        response = client.put(
            reverse('report_handler', kwargs={'reference_id': self.report_1.reference_id}),
            data=json.dumps(self.in_valid_payload),
            content_type='application/json'
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    # INVALID REFERENCE ID: should indicate api not found
    def test_put_report_resolve_status_in_valid_reference_id(self):
        response = client.put(
            reverse('report_handler', kwargs={'reference_id': 'in_valid'}),
            data=json.dumps(self.valid_payload),
            content_type='application/json'
        )

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
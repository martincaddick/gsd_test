# Platform

The blueprint includes guidance for cloud native and hybrid deployments of Microsoft 365 technologies, configured to meet PROTECTED standards. It is designed to also be used for staged deployments that leverage hybrid configurations as a transition step to cloud native transformation.

Each section of the document provides a description of the relevant technology component, including considerations, decisions and their applicability to cloud native implementations, hybrid configurations, or both.

It is important to consider that even if a product is licenced for use by Microsoft, it may not be included in this blueprint if it is not required for all organisations or a product that cannot operate at PROTECTED. Additionally, an organisation may have requirements that will need to be considered outside of this blueprint.

This document covers the following topics.

| Section                           | Description                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| Identity and Access Management    | The Identity and Access Management section includes the authentication, authorisation methods and Conditional Access policies used within the blueprint for Cloud and Hybrid solutions. |
| Security                          | The Security section details several cloud-based security components available within the Microsoft 365 suite to detect and monitor suspicious behaviour for Cloud and Hybrid solutions. |
| Client Configuration              | The Client Configuration section details the Microsoft Endpoint Manager - Intune (Intune) management methods and design decisions for the client configuration. |
| Backup and Operational Management | The Backup and Operation Management section details the backup design decisions including RPO (recovery point objective), RTO (recovery time objective) and Data Availability. |
| System Administration             | The System Administration section details how the solution will be managed, the administrative consoles that will be used to administrator the various components, and how Role-Based Access Control (RBAC) is implemented to control access. |

For each component within the document there is a brief description of the contents of the section, a commentary on the things that have been considered in determining the decisions and the design decisions themselves.

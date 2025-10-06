# `vaultSecretsIntegration` Submodule <a name="`vaultSecretsIntegration` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegration <a name="VaultSecretsIntegration" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration hcp_vault_secrets_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capabilities: typing.List[str],
  name: str,
  provider_type: str,
  aws_access_keys: VaultSecretsIntegrationAwsAccessKeys = None,
  aws_federated_workload_identity: VaultSecretsIntegrationAwsFederatedWorkloadIdentity = None,
  azure_client_secret: VaultSecretsIntegrationAzureClientSecret = None,
  azure_federated_workload_identity: VaultSecretsIntegrationAzureFederatedWorkloadIdentity = None,
  confluent_static_credentials: VaultSecretsIntegrationConfluentStaticCredentials = None,
  gcp_federated_workload_identity: VaultSecretsIntegrationGcpFederatedWorkloadIdentity = None,
  gcp_service_account_key: VaultSecretsIntegrationGcpServiceAccountKey = None,
  gitlab_access: VaultSecretsIntegrationGitlabAccess = None,
  mongodb_atlas_static_credentials: VaultSecretsIntegrationMongodbAtlasStaticCredentials = None,
  project_id: str = None,
  twilio_static_credentials: VaultSecretsIntegrationTwilioStaticCredentials = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.providerType">provider_type</a></code> | <code>str</code> | The provider or 3rd party platform the integration is for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.awsAccessKeys">aws_access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.awsFederatedWorkloadIdentity">aws_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.azureClientSecret">azure_client_secret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a></code> | Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.azureFederatedWorkloadIdentity">azure_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.confluentStaticCredentials">confluent_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a></code> | Confluent API key used to authenticate for cloud apis. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.gcpFederatedWorkloadIdentity">gcp_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.gitlabAccess">gitlab_access</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess">VaultSecretsIntegrationGitlabAccess</a></code> | GitLab access token used to authenticate against the target GitLab account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.mongodbAtlasStaticCredentials">mongodb_atlas_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a></code> | MongoDB Atlas API key used to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.twilioStaticCredentials">twilio_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a></code> | Twilio API key parts used to authenticate against the target Twilio account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.capabilities"></a>

- *Type:* typing.List[str]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#capabilities VaultSecretsIntegration#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.name"></a>

- *Type:* str

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#name VaultSecretsIntegration#name}

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.providerType"></a>

- *Type:* str

The provider or 3rd party platform the integration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#provider_type VaultSecretsIntegration#provider_type}

---

##### `aws_access_keys`<sup>Optional</sup> <a name="aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.awsAccessKeys"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#aws_access_keys VaultSecretsIntegration#aws_access_keys}

---

##### `aws_federated_workload_identity`<sup>Optional</sup> <a name="aws_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.awsFederatedWorkloadIdentity"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#aws_federated_workload_identity VaultSecretsIntegration#aws_federated_workload_identity}

---

##### `azure_client_secret`<sup>Optional</sup> <a name="azure_client_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.azureClientSecret"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#azure_client_secret VaultSecretsIntegration#azure_client_secret}

---

##### `azure_federated_workload_identity`<sup>Optional</sup> <a name="azure_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.azureFederatedWorkloadIdentity"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#azure_federated_workload_identity VaultSecretsIntegration#azure_federated_workload_identity}

---

##### `confluent_static_credentials`<sup>Optional</sup> <a name="confluent_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.confluentStaticCredentials"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

Confluent API key used to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#confluent_static_credentials VaultSecretsIntegration#confluent_static_credentials}

---

##### `gcp_federated_workload_identity`<sup>Optional</sup> <a name="gcp_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.gcpFederatedWorkloadIdentity"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#gcp_federated_workload_identity VaultSecretsIntegration#gcp_federated_workload_identity}

---

##### `gcp_service_account_key`<sup>Optional</sup> <a name="gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.gcpServiceAccountKey"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#gcp_service_account_key VaultSecretsIntegration#gcp_service_account_key}

---

##### `gitlab_access`<sup>Optional</sup> <a name="gitlab_access" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.gitlabAccess"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess">VaultSecretsIntegrationGitlabAccess</a>

GitLab access token used to authenticate against the target GitLab account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#gitlab_access VaultSecretsIntegration#gitlab_access}

---

##### `mongodb_atlas_static_credentials`<sup>Optional</sup> <a name="mongodb_atlas_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.mongodbAtlasStaticCredentials"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

MongoDB Atlas API key used to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#mongodb_atlas_static_credentials VaultSecretsIntegration#mongodb_atlas_static_credentials}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.projectId"></a>

- *Type:* str

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#project_id VaultSecretsIntegration#project_id}

---

##### `twilio_static_credentials`<sup>Optional</sup> <a name="twilio_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.twilioStaticCredentials"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

Twilio API key parts used to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#twilio_static_credentials VaultSecretsIntegration#twilio_static_credentials}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys">put_aws_access_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity">put_aws_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret">put_azure_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity">put_azure_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials">put_confluent_static_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity">put_gcp_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey">put_gcp_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGitlabAccess">put_gitlab_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials">put_mongodb_atlas_static_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials">put_twilio_static_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsAccessKeys">reset_aws_access_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsFederatedWorkloadIdentity">reset_aws_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureClientSecret">reset_azure_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureFederatedWorkloadIdentity">reset_azure_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetConfluentStaticCredentials">reset_confluent_static_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpFederatedWorkloadIdentity">reset_gcp_federated_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpServiceAccountKey">reset_gcp_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGitlabAccess">reset_gitlab_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetMongodbAtlasStaticCredentials">reset_mongodb_atlas_static_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetTwilioStaticCredentials">reset_twilio_static_credentials</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_access_keys` <a name="put_aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys"></a>

```python
def put_aws_access_keys(
  access_key_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys.parameter.accessKeyId"></a>

- *Type:* str

Key ID used with the secret key to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#access_key_id VaultSecretsIntegration#access_key_id}

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys.parameter.secretAccessKey"></a>

- *Type:* str

Secret key used with the key ID to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#secret_access_key VaultSecretsIntegration#secret_access_key}

---

##### `put_aws_federated_workload_identity` <a name="put_aws_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity"></a>

```python
def put_aws_federated_workload_identity(
  audience: str,
  role_arn: str
) -> None
```

###### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity.parameter.audience"></a>

- *Type:* str

Audience configured on the AWS IAM identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity.parameter.roleArn"></a>

- *Type:* str

AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#role_arn VaultSecretsIntegration#role_arn}

---

##### `put_azure_client_secret` <a name="put_azure_client_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret"></a>

```python
def put_azure_client_secret(
  client_id: str,
  client_secret: str,
  tenant_id: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret.parameter.clientId"></a>

- *Type:* str

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret.parameter.clientSecret"></a>

- *Type:* str

Secret value corresponding to the Azure client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#client_secret VaultSecretsIntegration#client_secret}

---

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret.parameter.tenantId"></a>

- *Type:* str

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}

---

##### `put_azure_federated_workload_identity` <a name="put_azure_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity"></a>

```python
def put_azure_federated_workload_identity(
  audience: str,
  client_id: str,
  tenant_id: str
) -> None
```

###### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity.parameter.audience"></a>

- *Type:* str

Audience configured on the Azure federated identity credentials to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity.parameter.clientId"></a>

- *Type:* str

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}

---

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity.parameter.tenantId"></a>

- *Type:* str

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}

---

##### `put_confluent_static_credentials` <a name="put_confluent_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials"></a>

```python
def put_confluent_static_credentials(
  cloud_api_key_id: str,
  cloud_api_secret: str
) -> None
```

###### `cloud_api_key_id`<sup>Required</sup> <a name="cloud_api_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials.parameter.cloudApiKeyId"></a>

- *Type:* str

Public key used alongside the private key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#cloud_api_key_id VaultSecretsIntegration#cloud_api_key_id}

---

###### `cloud_api_secret`<sup>Required</sup> <a name="cloud_api_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials.parameter.cloudApiSecret"></a>

- *Type:* str

Private key used alongside the public key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#cloud_api_secret VaultSecretsIntegration#cloud_api_secret}

---

##### `put_gcp_federated_workload_identity` <a name="put_gcp_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity"></a>

```python
def put_gcp_federated_workload_identity(
  audience: str,
  service_account_email: str
) -> None
```

###### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity.parameter.audience"></a>

- *Type:* str

Audience configured on the GCP identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

###### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity.parameter.serviceAccountEmail"></a>

- *Type:* str

GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#service_account_email VaultSecretsIntegration#service_account_email}

---

##### `put_gcp_service_account_key` <a name="put_gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey"></a>

```python
def put_gcp_service_account_key(
  credentials: str
) -> None
```

###### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey.parameter.credentials"></a>

- *Type:* str

JSON or base64 encoded service account key received from GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#credentials VaultSecretsIntegration#credentials}

---

##### `put_gitlab_access` <a name="put_gitlab_access" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGitlabAccess"></a>

```python
def put_gitlab_access(
  token: str
) -> None
```

###### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGitlabAccess.parameter.token"></a>

- *Type:* str

Access token used to authenticate against the target GitLab account. This token must have privilege to create CI/CD variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#token VaultSecretsIntegration#token}

---

##### `put_mongodb_atlas_static_credentials` <a name="put_mongodb_atlas_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials"></a>

```python
def put_mongodb_atlas_static_credentials(
  api_private_key: str,
  api_public_key: str
) -> None
```

###### `api_private_key`<sup>Required</sup> <a name="api_private_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials.parameter.apiPrivateKey"></a>

- *Type:* str

Private key used alongside the public key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#api_private_key VaultSecretsIntegration#api_private_key}

---

###### `api_public_key`<sup>Required</sup> <a name="api_public_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials.parameter.apiPublicKey"></a>

- *Type:* str

Public key used alongside the private key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#api_public_key VaultSecretsIntegration#api_public_key}

---

##### `put_twilio_static_credentials` <a name="put_twilio_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials"></a>

```python
def put_twilio_static_credentials(
  account_sid: str,
  api_key_secret: str,
  api_key_sid: str
) -> None
```

###### `account_sid`<sup>Required</sup> <a name="account_sid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials.parameter.accountSid"></a>

- *Type:* str

Account SID for the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#account_sid VaultSecretsIntegration#account_sid}

---

###### `api_key_secret`<sup>Required</sup> <a name="api_key_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials.parameter.apiKeySecret"></a>

- *Type:* str

Api key secret used with the api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#api_key_secret VaultSecretsIntegration#api_key_secret}

---

###### `api_key_sid`<sup>Required</sup> <a name="api_key_sid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials.parameter.apiKeySid"></a>

- *Type:* str

Api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#api_key_sid VaultSecretsIntegration#api_key_sid}

---

##### `reset_aws_access_keys` <a name="reset_aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsAccessKeys"></a>

```python
def reset_aws_access_keys() -> None
```

##### `reset_aws_federated_workload_identity` <a name="reset_aws_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsFederatedWorkloadIdentity"></a>

```python
def reset_aws_federated_workload_identity() -> None
```

##### `reset_azure_client_secret` <a name="reset_azure_client_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureClientSecret"></a>

```python
def reset_azure_client_secret() -> None
```

##### `reset_azure_federated_workload_identity` <a name="reset_azure_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureFederatedWorkloadIdentity"></a>

```python
def reset_azure_federated_workload_identity() -> None
```

##### `reset_confluent_static_credentials` <a name="reset_confluent_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetConfluentStaticCredentials"></a>

```python
def reset_confluent_static_credentials() -> None
```

##### `reset_gcp_federated_workload_identity` <a name="reset_gcp_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpFederatedWorkloadIdentity"></a>

```python
def reset_gcp_federated_workload_identity() -> None
```

##### `reset_gcp_service_account_key` <a name="reset_gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpServiceAccountKey"></a>

```python
def reset_gcp_service_account_key() -> None
```

##### `reset_gitlab_access` <a name="reset_gitlab_access" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGitlabAccess"></a>

```python
def reset_gitlab_access() -> None
```

##### `reset_mongodb_atlas_static_credentials` <a name="reset_mongodb_atlas_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetMongodbAtlasStaticCredentials"></a>

```python
def reset_mongodb_atlas_static_credentials() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_twilio_static_credentials` <a name="reset_twilio_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetTwilioStaticCredentials"></a>

```python
def reset_twilio_static_credentials() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultSecretsIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultSecretsIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultSecretsIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultSecretsIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeys">aws_access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference">VaultSecretsIntegrationAwsAccessKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentity">aws_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecret">azure_client_secret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference">VaultSecretsIntegrationAzureClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentity">azure_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentials">confluent_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference">VaultSecretsIntegrationConfluentStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentity">gcp_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gitlabAccess">gitlab_access</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference">VaultSecretsIntegrationGitlabAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentials">mongodb_atlas_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference">VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentials">twilio_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeysInput">aws_access_keys_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentityInput">aws_federated_workload_identity_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecretInput">azure_client_secret_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentityInput">azure_federated_workload_identity_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentialsInput">confluent_static_credentials_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentityInput">gcp_federated_workload_identity_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKeyInput">gcp_service_account_key_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gitlabAccessInput">gitlab_access_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess">VaultSecretsIntegrationGitlabAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentialsInput">mongodb_atlas_static_credentials_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerTypeInput">provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentialsInput">twilio_static_credentials_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aws_access_keys`<sup>Required</sup> <a name="aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeys"></a>

```python
aws_access_keys: VaultSecretsIntegrationAwsAccessKeysOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference">VaultSecretsIntegrationAwsAccessKeysOutputReference</a>

---

##### `aws_federated_workload_identity`<sup>Required</sup> <a name="aws_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentity"></a>

```python
aws_federated_workload_identity: VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference</a>

---

##### `azure_client_secret`<sup>Required</sup> <a name="azure_client_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecret"></a>

```python
azure_client_secret: VaultSecretsIntegrationAzureClientSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference">VaultSecretsIntegrationAzureClientSecretOutputReference</a>

---

##### `azure_federated_workload_identity`<sup>Required</sup> <a name="azure_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentity"></a>

```python
azure_federated_workload_identity: VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference</a>

---

##### `confluent_static_credentials`<sup>Required</sup> <a name="confluent_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentials"></a>

```python
confluent_static_credentials: VaultSecretsIntegrationConfluentStaticCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference">VaultSecretsIntegrationConfluentStaticCredentialsOutputReference</a>

---

##### `gcp_federated_workload_identity`<sup>Required</sup> <a name="gcp_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentity"></a>

```python
gcp_federated_workload_identity: VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference</a>

---

##### `gcp_service_account_key`<sup>Required</sup> <a name="gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKey"></a>

```python
gcp_service_account_key: VaultSecretsIntegrationGcpServiceAccountKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyOutputReference</a>

---

##### `gitlab_access`<sup>Required</sup> <a name="gitlab_access" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gitlabAccess"></a>

```python
gitlab_access: VaultSecretsIntegrationGitlabAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference">VaultSecretsIntegrationGitlabAccessOutputReference</a>

---

##### `mongodb_atlas_static_credentials`<sup>Required</sup> <a name="mongodb_atlas_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentials"></a>

```python
mongodb_atlas_static_credentials: VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference">VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference</a>

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `twilio_static_credentials`<sup>Required</sup> <a name="twilio_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentials"></a>

```python
twilio_static_credentials: VaultSecretsIntegrationTwilioStaticCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialsOutputReference</a>

---

##### `aws_access_keys_input`<sup>Optional</sup> <a name="aws_access_keys_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeysInput"></a>

```python
aws_access_keys_input: IResolvable | VaultSecretsIntegrationAwsAccessKeys
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---

##### `aws_federated_workload_identity_input`<sup>Optional</sup> <a name="aws_federated_workload_identity_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentityInput"></a>

```python
aws_federated_workload_identity_input: IResolvable | VaultSecretsIntegrationAwsFederatedWorkloadIdentity
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---

##### `azure_client_secret_input`<sup>Optional</sup> <a name="azure_client_secret_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecretInput"></a>

```python
azure_client_secret_input: IResolvable | VaultSecretsIntegrationAzureClientSecret
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

---

##### `azure_federated_workload_identity_input`<sup>Optional</sup> <a name="azure_federated_workload_identity_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentityInput"></a>

```python
azure_federated_workload_identity_input: IResolvable | VaultSecretsIntegrationAzureFederatedWorkloadIdentity
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `confluent_static_credentials_input`<sup>Optional</sup> <a name="confluent_static_credentials_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentialsInput"></a>

```python
confluent_static_credentials_input: IResolvable | VaultSecretsIntegrationConfluentStaticCredentials
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

---

##### `gcp_federated_workload_identity_input`<sup>Optional</sup> <a name="gcp_federated_workload_identity_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentityInput"></a>

```python
gcp_federated_workload_identity_input: IResolvable | VaultSecretsIntegrationGcpFederatedWorkloadIdentity
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

---

##### `gcp_service_account_key_input`<sup>Optional</sup> <a name="gcp_service_account_key_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKeyInput"></a>

```python
gcp_service_account_key_input: IResolvable | VaultSecretsIntegrationGcpServiceAccountKey
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

---

##### `gitlab_access_input`<sup>Optional</sup> <a name="gitlab_access_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gitlabAccessInput"></a>

```python
gitlab_access_input: IResolvable | VaultSecretsIntegrationGitlabAccess
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess">VaultSecretsIntegrationGitlabAccess</a>

---

##### `mongodb_atlas_static_credentials_input`<sup>Optional</sup> <a name="mongodb_atlas_static_credentials_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentialsInput"></a>

```python
mongodb_atlas_static_credentials_input: IResolvable | VaultSecretsIntegrationMongodbAtlasStaticCredentials
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `provider_type_input`<sup>Optional</sup> <a name="provider_type_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerTypeInput"></a>

```python
provider_type_input: str
```

- *Type:* str

---

##### `twilio_static_credentials_input`<sup>Optional</sup> <a name="twilio_static_credentials_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentialsInput"></a>

```python
twilio_static_credentials_input: IResolvable | VaultSecretsIntegrationTwilioStaticCredentials
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAwsAccessKeys <a name="VaultSecretsIntegrationAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys(
  access_key_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Key ID used with the secret key to authenticate against the target AWS account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Secret key used with the key ID to authenticate against the target AWS account. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Key ID used with the secret key to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#access_key_id VaultSecretsIntegration#access_key_id}

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Secret key used with the key ID to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#secret_access_key VaultSecretsIntegration#secret_access_key}

---

### VaultSecretsIntegrationAwsFederatedWorkloadIdentity <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity(
  audience: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.audience">audience</a></code> | <code>str</code> | Audience configured on the AWS IAM identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.roleArn">role_arn</a></code> | <code>str</code> | AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience configured on the AWS IAM identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#role_arn VaultSecretsIntegration#role_arn}

---

### VaultSecretsIntegrationAzureClientSecret <a name="VaultSecretsIntegrationAzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret(
  client_id: str,
  client_secret: str,
  tenant_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientId">client_id</a></code> | <code>str</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientSecret">client_secret</a></code> | <code>str</code> | Secret value corresponding to the Azure client secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.tenantId">tenant_id</a></code> | <code>str</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Secret value corresponding to the Azure client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#client_secret VaultSecretsIntegration#client_secret}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}

---

### VaultSecretsIntegrationAzureFederatedWorkloadIdentity <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity(
  audience: str,
  client_id: str,
  tenant_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.audience">audience</a></code> | <code>str</code> | Audience configured on the Azure federated identity credentials to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.clientId">client_id</a></code> | <code>str</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.tenantId">tenant_id</a></code> | <code>str</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience configured on the Azure federated identity credentials to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}

---

### VaultSecretsIntegrationConfig <a name="VaultSecretsIntegrationConfig" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  capabilities: typing.List[str],
  name: str,
  provider_type: str,
  aws_access_keys: VaultSecretsIntegrationAwsAccessKeys = None,
  aws_federated_workload_identity: VaultSecretsIntegrationAwsFederatedWorkloadIdentity = None,
  azure_client_secret: VaultSecretsIntegrationAzureClientSecret = None,
  azure_federated_workload_identity: VaultSecretsIntegrationAzureFederatedWorkloadIdentity = None,
  confluent_static_credentials: VaultSecretsIntegrationConfluentStaticCredentials = None,
  gcp_federated_workload_identity: VaultSecretsIntegrationGcpFederatedWorkloadIdentity = None,
  gcp_service_account_key: VaultSecretsIntegrationGcpServiceAccountKey = None,
  gitlab_access: VaultSecretsIntegrationGitlabAccess = None,
  mongodb_atlas_static_credentials: VaultSecretsIntegrationMongodbAtlasStaticCredentials = None,
  project_id: str = None,
  twilio_static_credentials: VaultSecretsIntegrationTwilioStaticCredentials = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.name">name</a></code> | <code>str</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.providerType">provider_type</a></code> | <code>str</code> | The provider or 3rd party platform the integration is for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsAccessKeys">aws_access_keys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsFederatedWorkloadIdentity">aws_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureClientSecret">azure_client_secret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a></code> | Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureFederatedWorkloadIdentity">azure_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.confluentStaticCredentials">confluent_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a></code> | Confluent API key used to authenticate for cloud apis. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpFederatedWorkloadIdentity">gcp_federated_workload_identity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gitlabAccess">gitlab_access</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess">VaultSecretsIntegrationGitlabAccess</a></code> | GitLab access token used to authenticate against the target GitLab account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.mongodbAtlasStaticCredentials">mongodb_atlas_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a></code> | MongoDB Atlas API key used to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.projectId">project_id</a></code> | <code>str</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.twilioStaticCredentials">twilio_static_credentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a></code> | Twilio API key parts used to authenticate against the target Twilio account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#capabilities VaultSecretsIntegration#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#name VaultSecretsIntegration#name}

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

The provider or 3rd party platform the integration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#provider_type VaultSecretsIntegration#provider_type}

---

##### `aws_access_keys`<sup>Optional</sup> <a name="aws_access_keys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsAccessKeys"></a>

```python
aws_access_keys: VaultSecretsIntegrationAwsAccessKeys
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#aws_access_keys VaultSecretsIntegration#aws_access_keys}

---

##### `aws_federated_workload_identity`<sup>Optional</sup> <a name="aws_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsFederatedWorkloadIdentity"></a>

```python
aws_federated_workload_identity: VaultSecretsIntegrationAwsFederatedWorkloadIdentity
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#aws_federated_workload_identity VaultSecretsIntegration#aws_federated_workload_identity}

---

##### `azure_client_secret`<sup>Optional</sup> <a name="azure_client_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureClientSecret"></a>

```python
azure_client_secret: VaultSecretsIntegrationAzureClientSecret
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#azure_client_secret VaultSecretsIntegration#azure_client_secret}

---

##### `azure_federated_workload_identity`<sup>Optional</sup> <a name="azure_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureFederatedWorkloadIdentity"></a>

```python
azure_federated_workload_identity: VaultSecretsIntegrationAzureFederatedWorkloadIdentity
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#azure_federated_workload_identity VaultSecretsIntegration#azure_federated_workload_identity}

---

##### `confluent_static_credentials`<sup>Optional</sup> <a name="confluent_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.confluentStaticCredentials"></a>

```python
confluent_static_credentials: VaultSecretsIntegrationConfluentStaticCredentials
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

Confluent API key used to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#confluent_static_credentials VaultSecretsIntegration#confluent_static_credentials}

---

##### `gcp_federated_workload_identity`<sup>Optional</sup> <a name="gcp_federated_workload_identity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpFederatedWorkloadIdentity"></a>

```python
gcp_federated_workload_identity: VaultSecretsIntegrationGcpFederatedWorkloadIdentity
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#gcp_federated_workload_identity VaultSecretsIntegration#gcp_federated_workload_identity}

---

##### `gcp_service_account_key`<sup>Optional</sup> <a name="gcp_service_account_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpServiceAccountKey"></a>

```python
gcp_service_account_key: VaultSecretsIntegrationGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#gcp_service_account_key VaultSecretsIntegration#gcp_service_account_key}

---

##### `gitlab_access`<sup>Optional</sup> <a name="gitlab_access" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gitlabAccess"></a>

```python
gitlab_access: VaultSecretsIntegrationGitlabAccess
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess">VaultSecretsIntegrationGitlabAccess</a>

GitLab access token used to authenticate against the target GitLab account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#gitlab_access VaultSecretsIntegration#gitlab_access}

---

##### `mongodb_atlas_static_credentials`<sup>Optional</sup> <a name="mongodb_atlas_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.mongodbAtlasStaticCredentials"></a>

```python
mongodb_atlas_static_credentials: VaultSecretsIntegrationMongodbAtlasStaticCredentials
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

MongoDB Atlas API key used to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#mongodb_atlas_static_credentials VaultSecretsIntegration#mongodb_atlas_static_credentials}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#project_id VaultSecretsIntegration#project_id}

---

##### `twilio_static_credentials`<sup>Optional</sup> <a name="twilio_static_credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.twilioStaticCredentials"></a>

```python
twilio_static_credentials: VaultSecretsIntegrationTwilioStaticCredentials
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

Twilio API key parts used to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#twilio_static_credentials VaultSecretsIntegration#twilio_static_credentials}

---

### VaultSecretsIntegrationConfluentStaticCredentials <a name="VaultSecretsIntegrationConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials(
  cloud_api_key_id: str,
  cloud_api_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiKeyId">cloud_api_key_id</a></code> | <code>str</code> | Public key used alongside the private key to authenticate for cloud apis. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiSecret">cloud_api_secret</a></code> | <code>str</code> | Private key used alongside the public key to authenticate for cloud apis. |

---

##### `cloud_api_key_id`<sup>Required</sup> <a name="cloud_api_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiKeyId"></a>

```python
cloud_api_key_id: str
```

- *Type:* str

Public key used alongside the private key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#cloud_api_key_id VaultSecretsIntegration#cloud_api_key_id}

---

##### `cloud_api_secret`<sup>Required</sup> <a name="cloud_api_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiSecret"></a>

```python
cloud_api_secret: str
```

- *Type:* str

Private key used alongside the public key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#cloud_api_secret VaultSecretsIntegration#cloud_api_secret}

---

### VaultSecretsIntegrationGcpFederatedWorkloadIdentity <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity(
  audience: str,
  service_account_email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.audience">audience</a></code> | <code>str</code> | Audience configured on the GCP identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience configured on the GCP identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#service_account_email VaultSecretsIntegration#service_account_email}

---

### VaultSecretsIntegrationGcpServiceAccountKey <a name="VaultSecretsIntegrationGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey(
  credentials: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.property.credentials">credentials</a></code> | <code>str</code> | JSON or base64 encoded service account key received from GCP. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

JSON or base64 encoded service account key received from GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#credentials VaultSecretsIntegration#credentials}

---

### VaultSecretsIntegrationGitlabAccess <a name="VaultSecretsIntegrationGitlabAccess" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess(
  token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess.property.token">token</a></code> | <code>str</code> | Access token used to authenticate against the target GitLab account. This token must have privilege to create CI/CD variables. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess.property.token"></a>

```python
token: str
```

- *Type:* str

Access token used to authenticate against the target GitLab account. This token must have privilege to create CI/CD variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#token VaultSecretsIntegration#token}

---

### VaultSecretsIntegrationMongodbAtlasStaticCredentials <a name="VaultSecretsIntegrationMongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials(
  api_private_key: str,
  api_public_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPrivateKey">api_private_key</a></code> | <code>str</code> | Private key used alongside the public key to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPublicKey">api_public_key</a></code> | <code>str</code> | Public key used alongside the private key to authenticate against the target project. |

---

##### `api_private_key`<sup>Required</sup> <a name="api_private_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPrivateKey"></a>

```python
api_private_key: str
```

- *Type:* str

Private key used alongside the public key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#api_private_key VaultSecretsIntegration#api_private_key}

---

##### `api_public_key`<sup>Required</sup> <a name="api_public_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPublicKey"></a>

```python
api_public_key: str
```

- *Type:* str

Public key used alongside the private key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#api_public_key VaultSecretsIntegration#api_public_key}

---

### VaultSecretsIntegrationTwilioStaticCredentials <a name="VaultSecretsIntegrationTwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials(
  account_sid: str,
  api_key_secret: str,
  api_key_sid: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.accountSid">account_sid</a></code> | <code>str</code> | Account SID for the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySecret">api_key_secret</a></code> | <code>str</code> | Api key secret used with the api key SID to authenticate against the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySid">api_key_sid</a></code> | <code>str</code> | Api key SID to authenticate against the target Twilio account. |

---

##### `account_sid`<sup>Required</sup> <a name="account_sid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.accountSid"></a>

```python
account_sid: str
```

- *Type:* str

Account SID for the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#account_sid VaultSecretsIntegration#account_sid}

---

##### `api_key_secret`<sup>Required</sup> <a name="api_key_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySecret"></a>

```python
api_key_secret: str
```

- *Type:* str

Api key secret used with the api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#api_key_secret VaultSecretsIntegration#api_key_secret}

---

##### `api_key_sid`<sup>Required</sup> <a name="api_key_sid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySid"></a>

```python
api_key_sid: str
```

- *Type:* str

Api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/vault_secrets_integration#api_key_sid VaultSecretsIntegration#api_key_sid}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAwsAccessKeysOutputReference <a name="VaultSecretsIntegrationAwsAccessKeysOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationAwsAccessKeys
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---


### VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationAwsFederatedWorkloadIdentity
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---


### VaultSecretsIntegrationAzureClientSecretOutputReference <a name="VaultSecretsIntegrationAzureClientSecretOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationAzureClientSecret
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

---


### VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationAzureFederatedWorkloadIdentity
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

---


### VaultSecretsIntegrationConfluentStaticCredentialsOutputReference <a name="VaultSecretsIntegrationConfluentStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyIdInput">cloud_api_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecretInput">cloud_api_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyId">cloud_api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecret">cloud_api_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_api_key_id_input`<sup>Optional</sup> <a name="cloud_api_key_id_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyIdInput"></a>

```python
cloud_api_key_id_input: str
```

- *Type:* str

---

##### `cloud_api_secret_input`<sup>Optional</sup> <a name="cloud_api_secret_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecretInput"></a>

```python
cloud_api_secret_input: str
```

- *Type:* str

---

##### `cloud_api_key_id`<sup>Required</sup> <a name="cloud_api_key_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyId"></a>

```python
cloud_api_key_id: str
```

- *Type:* str

---

##### `cloud_api_secret`<sup>Required</sup> <a name="cloud_api_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecret"></a>

```python
cloud_api_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationConfluentStaticCredentials
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

---


### VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationGcpFederatedWorkloadIdentity
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

---


### VaultSecretsIntegrationGcpServiceAccountKeyOutputReference <a name="VaultSecretsIntegrationGcpServiceAccountKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationGcpServiceAccountKey
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

---


### VaultSecretsIntegrationGitlabAccessOutputReference <a name="VaultSecretsIntegrationGitlabAccessOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess">VaultSecretsIntegrationGitlabAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationGitlabAccess
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGitlabAccess">VaultSecretsIntegrationGitlabAccess</a>

---


### VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference <a name="VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKeyInput">api_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKeyInput">api_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKey">api_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKey">api_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_private_key_input`<sup>Optional</sup> <a name="api_private_key_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKeyInput"></a>

```python
api_private_key_input: str
```

- *Type:* str

---

##### `api_public_key_input`<sup>Optional</sup> <a name="api_public_key_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKeyInput"></a>

```python
api_public_key_input: str
```

- *Type:* str

---

##### `api_private_key`<sup>Required</sup> <a name="api_private_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKey"></a>

```python
api_private_key: str
```

- *Type:* str

---

##### `api_public_key`<sup>Required</sup> <a name="api_public_key" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKey"></a>

```python
api_public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationMongodbAtlasStaticCredentials
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

---


### VaultSecretsIntegrationTwilioStaticCredentialsOutputReference <a name="VaultSecretsIntegrationTwilioStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import vault_secrets_integration

vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSidInput">account_sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecretInput">api_key_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySidInput">api_key_sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSid">account_sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecret">api_key_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySid">api_key_sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_sid_input`<sup>Optional</sup> <a name="account_sid_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSidInput"></a>

```python
account_sid_input: str
```

- *Type:* str

---

##### `api_key_secret_input`<sup>Optional</sup> <a name="api_key_secret_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecretInput"></a>

```python
api_key_secret_input: str
```

- *Type:* str

---

##### `api_key_sid_input`<sup>Optional</sup> <a name="api_key_sid_input" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySidInput"></a>

```python
api_key_sid_input: str
```

- *Type:* str

---

##### `account_sid`<sup>Required</sup> <a name="account_sid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSid"></a>

```python
account_sid: str
```

- *Type:* str

---

##### `api_key_secret`<sup>Required</sup> <a name="api_key_secret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecret"></a>

```python
api_key_secret: str
```

- *Type:* str

---

##### `api_key_sid`<sup>Required</sup> <a name="api_key_sid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySid"></a>

```python
api_key_sid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VaultSecretsIntegrationTwilioStaticCredentials
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

---




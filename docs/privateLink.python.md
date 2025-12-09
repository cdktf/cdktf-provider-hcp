# `privateLink` Submodule <a name="`privateLink` Submodule" id="@cdktf/provider-hcp.privateLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateLink <a name="PrivateLink" id="@cdktf/provider-hcp.privateLink.PrivateLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link hcp_private_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import private_link

privateLink.PrivateLink(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hvn_id: str,
  private_link_id: str,
  vault_cluster_id: str,
  consumer_accounts: typing.List[str] = None,
  consumer_ip_ranges: typing.List[str] = None,
  consumer_regions: typing.List[str] = None,
  id: str = None,
  project_id: str = None,
  timeouts: PrivateLinkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN associated with the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.privateLinkId">private_link_id</a></code> | <code>str</code> | The ID of the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.vaultClusterId">vault_cluster_id</a></code> | <code>str</code> | The ID of the HCP Vault cluster associated with the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.consumerAccounts">consumer_accounts</a></code> | <code>typing.List[str]</code> | The list of consumer accounts allowed to connect to the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.consumerIpRanges">consumer_ip_ranges</a></code> | <code>typing.List[str]</code> | The list of consumer IP ranges or CIDRs allowed to connect to the HVD cluster associated with the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.consumerRegions">consumer_regions</a></code> | <code>typing.List[str]</code> | The cloud provider regions from which consumers can connect to the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#id PrivateLink#id}. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the private link is located. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts">PrivateLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.hvnId"></a>

- *Type:* str

The ID of the HVN associated with the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#hvn_id PrivateLink#hvn_id}

---

##### `private_link_id`<sup>Required</sup> <a name="private_link_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.privateLinkId"></a>

- *Type:* str

The ID of the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#private_link_id PrivateLink#private_link_id}

---

##### `vault_cluster_id`<sup>Required</sup> <a name="vault_cluster_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.vaultClusterId"></a>

- *Type:* str

The ID of the HCP Vault cluster associated with the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#vault_cluster_id PrivateLink#vault_cluster_id}

---

##### `consumer_accounts`<sup>Optional</sup> <a name="consumer_accounts" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.consumerAccounts"></a>

- *Type:* typing.List[str]

The list of consumer accounts allowed to connect to the private link.

In AWS, these are IAM Principals. In Azure, these are Azure Subscription/Resource IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#consumer_accounts PrivateLink#consumer_accounts}

---

##### `consumer_ip_ranges`<sup>Optional</sup> <a name="consumer_ip_ranges" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.consumerIpRanges"></a>

- *Type:* typing.List[str]

The list of consumer IP ranges or CIDRs allowed to connect to the HVD cluster associated with the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#consumer_ip_ranges PrivateLink#consumer_ip_ranges}

---

##### `consumer_regions`<sup>Optional</sup> <a name="consumer_regions" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.consumerRegions"></a>

- *Type:* typing.List[str]

The cloud provider regions from which consumers can connect to the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#consumer_regions PrivateLink#consumer_regions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#id PrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the private link is located.

If not specified, the project configured in the provider is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#project_id PrivateLink#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.privateLink.PrivateLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts">PrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#timeouts PrivateLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.resetConsumerAccounts">reset_consumer_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.resetConsumerIpRanges">reset_consumer_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.resetConsumerRegions">reset_consumer_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.privateLink.PrivateLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.privateLink.PrivateLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.privateLink.PrivateLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.privateLink.PrivateLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.privateLink.PrivateLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.privateLink.PrivateLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.privateLink.PrivateLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.privateLink.PrivateLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.privateLink.PrivateLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.privateLink.PrivateLink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.privateLink.PrivateLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.privateLink.PrivateLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.privateLink.PrivateLink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.privateLink.PrivateLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.privateLink.PrivateLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.privateLink.PrivateLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.privateLink.PrivateLink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.privateLink.PrivateLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcp.privateLink.PrivateLink.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.privateLink.PrivateLink.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#create PrivateLink#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.privateLink.PrivateLink.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#default PrivateLink#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.privateLink.PrivateLink.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#delete PrivateLink#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.privateLink.PrivateLink.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#update PrivateLink#update}.

---

##### `reset_consumer_accounts` <a name="reset_consumer_accounts" id="@cdktf/provider-hcp.privateLink.PrivateLink.resetConsumerAccounts"></a>

```python
def reset_consumer_accounts() -> None
```

##### `reset_consumer_ip_ranges` <a name="reset_consumer_ip_ranges" id="@cdktf/provider-hcp.privateLink.PrivateLink.resetConsumerIpRanges"></a>

```python
def reset_consumer_ip_ranges() -> None
```

##### `reset_consumer_regions` <a name="reset_consumer_regions" id="@cdktf/provider-hcp.privateLink.PrivateLink.resetConsumerRegions"></a>

```python
def reset_consumer_regions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcp.privateLink.PrivateLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivateLink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.privateLink.PrivateLink.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import private_link

privateLink.PrivateLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.privateLink.PrivateLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.privateLink.PrivateLink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import private_link

privateLink.PrivateLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.privateLink.PrivateLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.privateLink.PrivateLink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import private_link

privateLink.PrivateLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.privateLink.PrivateLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.privateLink.PrivateLink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import private_link

privateLink.PrivateLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivateLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.privateLink.PrivateLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.privateLink.PrivateLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.defaultRegion">default_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference">PrivateLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerAccountsInput">consumer_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerIpRangesInput">consumer_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerRegionsInput">consumer_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.hvnIdInput">hvn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.privateLinkIdInput">private_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts">PrivateLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.vaultClusterIdInput">vault_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerAccounts">consumer_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerIpRanges">consumer_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerRegions">consumer_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.hvnId">hvn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.privateLinkId">private_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.vaultClusterId">vault_cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `default_region`<sup>Required</sup> <a name="default_region" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.defaultRegion"></a>

```python
default_region: str
```

- *Type:* str

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.timeouts"></a>

```python
timeouts: PrivateLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference">PrivateLinkTimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `consumer_accounts_input`<sup>Optional</sup> <a name="consumer_accounts_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerAccountsInput"></a>

```python
consumer_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consumer_ip_ranges_input`<sup>Optional</sup> <a name="consumer_ip_ranges_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerIpRangesInput"></a>

```python
consumer_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consumer_regions_input`<sup>Optional</sup> <a name="consumer_regions_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerRegionsInput"></a>

```python
consumer_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hvn_id_input`<sup>Optional</sup> <a name="hvn_id_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.hvnIdInput"></a>

```python
hvn_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_link_id_input`<sup>Optional</sup> <a name="private_link_id_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.privateLinkIdInput"></a>

```python
private_link_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PrivateLinkTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts">PrivateLinkTimeouts</a>

---

##### `vault_cluster_id_input`<sup>Optional</sup> <a name="vault_cluster_id_input" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.vaultClusterIdInput"></a>

```python
vault_cluster_id_input: str
```

- *Type:* str

---

##### `consumer_accounts`<sup>Required</sup> <a name="consumer_accounts" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerAccounts"></a>

```python
consumer_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consumer_ip_ranges`<sup>Required</sup> <a name="consumer_ip_ranges" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerIpRanges"></a>

```python
consumer_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consumer_regions`<sup>Required</sup> <a name="consumer_regions" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.consumerRegions"></a>

```python
consumer_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_link_id`<sup>Required</sup> <a name="private_link_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.privateLinkId"></a>

```python
private_link_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `vault_cluster_id`<sup>Required</sup> <a name="vault_cluster_id" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.vaultClusterId"></a>

```python
vault_cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.privateLink.PrivateLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateLinkConfig <a name="PrivateLinkConfig" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import private_link

privateLink.PrivateLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hvn_id: str,
  private_link_id: str,
  vault_cluster_id: str,
  consumer_accounts: typing.List[str] = None,
  consumer_ip_ranges: typing.List[str] = None,
  consumer_regions: typing.List[str] = None,
  id: str = None,
  project_id: str = None,
  timeouts: PrivateLinkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.hvnId">hvn_id</a></code> | <code>str</code> | The ID of the HVN associated with the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.privateLinkId">private_link_id</a></code> | <code>str</code> | The ID of the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.vaultClusterId">vault_cluster_id</a></code> | <code>str</code> | The ID of the HCP Vault cluster associated with the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.consumerAccounts">consumer_accounts</a></code> | <code>typing.List[str]</code> | The list of consumer accounts allowed to connect to the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.consumerIpRanges">consumer_ip_ranges</a></code> | <code>typing.List[str]</code> | The list of consumer IP ranges or CIDRs allowed to connect to the HVD cluster associated with the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.consumerRegions">consumer_regions</a></code> | <code>typing.List[str]</code> | The cloud provider regions from which consumers can connect to the private link. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#id PrivateLink#id}. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the private link is located. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts">PrivateLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `hvn_id`<sup>Required</sup> <a name="hvn_id" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.hvnId"></a>

```python
hvn_id: str
```

- *Type:* str

The ID of the HVN associated with the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#hvn_id PrivateLink#hvn_id}

---

##### `private_link_id`<sup>Required</sup> <a name="private_link_id" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.privateLinkId"></a>

```python
private_link_id: str
```

- *Type:* str

The ID of the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#private_link_id PrivateLink#private_link_id}

---

##### `vault_cluster_id`<sup>Required</sup> <a name="vault_cluster_id" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.vaultClusterId"></a>

```python
vault_cluster_id: str
```

- *Type:* str

The ID of the HCP Vault cluster associated with the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#vault_cluster_id PrivateLink#vault_cluster_id}

---

##### `consumer_accounts`<sup>Optional</sup> <a name="consumer_accounts" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.consumerAccounts"></a>

```python
consumer_accounts: typing.List[str]
```

- *Type:* typing.List[str]

The list of consumer accounts allowed to connect to the private link.

In AWS, these are IAM Principals. In Azure, these are Azure Subscription/Resource IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#consumer_accounts PrivateLink#consumer_accounts}

---

##### `consumer_ip_ranges`<sup>Optional</sup> <a name="consumer_ip_ranges" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.consumerIpRanges"></a>

```python
consumer_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

The list of consumer IP ranges or CIDRs allowed to connect to the HVD cluster associated with the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#consumer_ip_ranges PrivateLink#consumer_ip_ranges}

---

##### `consumer_regions`<sup>Optional</sup> <a name="consumer_regions" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.consumerRegions"></a>

```python
consumer_regions: typing.List[str]
```

- *Type:* typing.List[str]

The cloud provider regions from which consumers can connect to the private link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#consumer_regions PrivateLink#consumer_regions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#id PrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the private link is located.

If not specified, the project configured in the provider is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#project_id PrivateLink#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.privateLink.PrivateLinkConfig.property.timeouts"></a>

```python
timeouts: PrivateLinkTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts">PrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#timeouts PrivateLink#timeouts}

---

### PrivateLinkTimeouts <a name="PrivateLinkTimeouts" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import private_link

privateLink.PrivateLinkTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#create PrivateLink#create}. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#default PrivateLink#default}. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#delete PrivateLink#delete}. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#update PrivateLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#create PrivateLink#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#default PrivateLink#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#delete PrivateLink#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/private_link#update PrivateLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateLinkTimeoutsOutputReference <a name="PrivateLinkTimeoutsOutputReference" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import private_link

privateLink.PrivateLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts">PrivateLinkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.privateLink.PrivateLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PrivateLinkTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.privateLink.PrivateLinkTimeouts">PrivateLinkTimeouts</a>

---



